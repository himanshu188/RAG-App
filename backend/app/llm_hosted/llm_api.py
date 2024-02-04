import json

import requests

from common.logging import logger
from vectara_kb.context_summary import get_chunks, send_post_vectara

URL_DIFFBOT = "https://llm.diffbot.com/rag/v1/chat/completions"
URL_BENTO_MISTRAL_SHR = "https://mistralai-mistral-7-b-instruct-v-0-2-service-lajz-bf55e133.mt-guc1.bentoml.ai/v1/chat/completions"
URL_BENTO_MISTRAL_HM = "https://mistralai-mistral-7-b-instruct-v-0-2-service-jvfs-502b9c90.mt-guc1.bentoml.ai/v1/chat/completions"


def get_response_llm(query):
    context_list = get_chunks(query)
    context_string = ' '.join(context_list)
    logger.info(f"context string: {context_string}")

    # llm_answer = send_post_llm(query, context_string)
    llm_answer = send_post_llm_bentoml(query, context_string)
    if llm_answer.get('failure') is not None:
        logger.info("Using vectara summary")
        sm = send_post_vectara(query)
        answers = sm["responseSet"][0]["summary"][0]["text"]

    else:
        answers = llm_answer['choices'][0]['message']['content']
        logger.info(f"llm answers: {answers}")

    return answers


def send_post_llm(query, context_string):
    prompt_data = "Based on this context:" + context_string + "answer this question:" + query
    logger.info(f"full prompt: {prompt_data}")
    payload = json.dumps({
        "model": "diffbot-medium",
        "messages": [
            {
                "role": "user",
                "content": prompt_data
            }
        ],
        "stream": False,
        "include_diffbot_response": False
    })

    headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 5037d4d30d404254b92e5d3ac8ad8065'
    }

    response = requests.request("POST", URL_DIFFBOT, headers=headers, data=payload)

    if response.status_code == 200:
        logger.info(f"llm success: {response.json()}")
        return response.json()
    else:
        logger.info(f"llm failure: 500 error")
        logger.info(f"fallback option summarize")
        return {'failure': 'failed to get response from llm', 'status_code_llm': response.status_code}


def send_post_llm_bentoml(query, context_string):
    prompt_data = "Based on this context:" + context_string + "answer this question:" + query
    logger.info(f"full prompt: {prompt_data}")
    payload = json.dumps({
        "messages": [
            {
                "role": "user",
                "content": prompt_data
            }
        ],
        "model": "mistralai--Mistral-7B-Instruct-v0.2",
        "max_tokens": 256,
        "temperature": 0.7,
        "top_p": 0.43,
        "n": 1,
        "stream": False,
        "chat_template": "\"{{ bos_token }}{% for message in messages %}{% if (message['role'] == 'user') != (loop.index0 % 2 == 0) %}{{ raise_exception('Conversation roles must alternate user/assistant/user/assistant/...') }}{% endif %}{% if message['role'] == 'user' %}{{ '[INST] ' + message['content'] + ' [/INST]' }}{% elif message['role'] == 'assistant' %}{{ message['content'] + eos_token + ' ' }}{% else %}{{ raise_exception('Only user and assistant roles are supported!') }}{% endif %}{% endfor %}\"",
        "add_generation_prompt": True,
        "echo": False
    })

    headers = {
        'accept': 'application/json',
        'Content-Type': 'application/json'
    }

    response = requests.request("POST", URL_BENTO_MISTRAL_SHR, headers=headers, data=payload)

    if response.status_code == 200:
        logger.info(f"llm success: {response.json()}")
        return response.json()
    else:
        logger.info(f"llm failure: 500 error")
        logger.info(f"fallback option summarize")
        return {'failure': 'failed to get response from llm', 'status_code_llm': response.status_code}
