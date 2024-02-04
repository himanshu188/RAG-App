import json

import requests
from fastapi import HTTPException
from common.logging import logger

URL = "https://api.vectara.io/v1/query"


def get_summary(query):
    sm = send_post_vectara(query)
    summary_text = sm["responseSet"][0]["summary"][0]["text"]
    return summary_text


def get_chunks(query):
    chunky = send_post_vectara(query)
    text_list = [response["text"] for response_set in chunky["responseSet"] for response in response_set["response"]]
    return text_list


def send_post_vectara(query):
    payload = json.dumps({
        "query": [
            {
                "query": query,
                "queryContext": "",
                "start": 0,
                "numResults": 3,
                "contextConfig": {
                    "charsBefore": 0,
                    "charsAfter": 0,
                    "sentencesBefore": 2,
                    "sentencesAfter": 2,
                    "startTag": "%START_SNIPPET%",
                    "endTag": "%END_SNIPPET%"
                },
                "rerankingConfig": {
                    "rerankerId": 272725718,
                    "mmrConfig": {
                        "diversityBias": 0
                    }
                },
                "corpusKey": [
                    {
                        "customerId": 2827563187,
                        "corpusId": 2,
                        "semantics": 0,
                        "metadataFilter": "",
                        "lexicalInterpolationConfig": {
                            "lambda": 0.025
                        },
                        "dim": []
                    }
                ],
                "summary": [
                    {
                        "maxSummarizedResults": 5,
                        "responseLang": "eng",
                        "summarizerPromptName": "vectara-summary-ext-v1.2.0"
                    }
                ]
            }
        ]
    })
    headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'customer-id': '2827563187',
        'x-api-key': 'zwt_qIkws5y4O27Gk2w0BuqF4lm_0ylwGdrwbCJqJw'
    }

    response = requests.request("POST", URL, headers=headers, data=payload)

    if response.status_code == 200:
        logger.info(f"vectara success: {response.json()}")
        return response.json()
    else:
        logger.info(f"llm failure: 500 error")
        raise HTTPException(status_code=500, detail="failure in vectara")
