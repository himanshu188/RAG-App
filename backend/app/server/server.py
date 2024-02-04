from typing import Any
from fastapi.exceptions import RequestValidationError
from starlette.exceptions import HTTPException as StarletteHTTPException

from fastapi import FastAPI, APIRouter, Request, HTTPException
from fastapi.responses import JSONResponse
from starlette.middleware.cors import CORSMiddleware
from prometheus_fastapi_instrumentator import Instrumentator

from server import handlers
from common.common import service_name

Server = FastAPI(
    title=service_name,
    openapi_url="/v1/openapi.json",
    docs_url="/v1/docs")

# Set all CORS enabled origins
Server.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
    expose_headers=["*"],
)



def json_exception(req: Request, exc_msg: str, status_code: int) -> JSONResponse:
    return JSONResponse(content={
        "method": req.method,
        "url": str(req.url),
        "exception": exc_msg,
        "status_code": str(status_code),
    }, status_code=status_code)


@Server.exception_handler(Exception)
async def exception_handler(req: Request, e: Exception) -> JSONResponse:
    return json_exception(req, str(e), 500)


@Server.exception_handler(StarletteHTTPException)
async def http_exception_handler(req: Request, e: StarletteHTTPException) -> JSONResponse:
    return json_exception(req, e.detail, e.status_code)


@Server.exception_handler(RequestValidationError)
async def validation_exception_handler(req: Request, e: RequestValidationError) -> JSONResponse:
    return json_exception(req, str(e), 400)


root_router = APIRouter()


@root_router.get("/health", status_code=200)
def health() -> Any:
    return JSONResponse(content={"status": "ok"})


root_router.include_router(handlers.router, prefix="", tags=[])
Server.include_router(root_router, prefix="/v1")

Instrumentator().instrument(Server).expose(Server)
