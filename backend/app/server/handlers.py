from fastapi import APIRouter

from vectara_kb.context_summary import get_chunks, get_summary
from llm_hosted.llm_api import get_response_llm
from common.logging import logger
from dashboard_data.json_data import get_data1, get_data2, get_data3, get_data4, get_data5, get_data6

router = APIRouter()

custom_prompt_template = """Use the following pieces of information to answer the user's question.
If you don't know the answer, just say that you don't know, don't try to make up an answer.
Context: {context}
Question: {question}
Only return the helpful answer below and nothing else.
Helpful answer:
"""


@router.get("/healthz", status_code=200)
def healthz():
    return 'I am alive'


@router.get("/kb/chunks", status_code=200)
def chunks(json_data: dict):
    query_resp = get_chunks(json_data["query"])
    logger.info(f"chunks: {query_resp}")
    processed_data = {"query": json_data["query"], "chunks": query_resp}
    return processed_data


@router.get("/kb/summary", status_code=200)
def summarize(json_data: dict):
    query_resp = get_summary(json_data["query"])
    logger.info(f"summary: {query_resp}")
    processed_data = {"query": json_data["query"], "summary": query_resp}
    return processed_data


@router.post("/llm/query", status_code=200)
def handle_query(json_data: dict):
    if "Can you share" in json_data["query"]:
        logger.info(f"mock answer")
        ans = "Top semi popular influencer are John, Jenny, Sam and they have around 10k folllowers and they are on the rise.."
        processed_data = {"query": json_data["query"], "answer": ans}
    else:
        query_resp = get_response_llm(json_data["query"])
        logger.info(f"llm_answer: {query_resp}")
        processed_data = {"query": json_data["query"], "answer": query_resp}
    return processed_data


@router.get("/dashboard/a", status_code=200)
def get_datas():
    return get_data1()


@router.get("/dashboard/b", status_code=200)
def get_datas():
    return get_data2()


@router.get("/dashboard/c", status_code=200)
def get_datas():
    return get_data3()


@router.get("/dashboard/d", status_code=200)
def get_datas():
    return get_data4()


@router.get("/dashboard/e", status_code=200)
def get_datas():
    return get_data5()


@router.get("/dashboard/f", status_code=200)
def get_datas():
    return get_data6()
