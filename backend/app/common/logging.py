from pydantic import BaseModel
from common.common import service_name
import logging
from logging.config import dictConfig as configLogger
import os


log_level = os.environ.get("LOG_LEVEL", "DEBUG").upper()


class LogConfig(BaseModel):
    """Logging configuration to be set for the app"""

    global log_level
    LOGGER_NAME: str = service_name
    LOG_FORMAT: str = "%(levelprefix)s | %(asctime)s | %(message)s"
    LOG_LEVEL: str = log_level

    # Logging config
    version = 1
    disable_existing_loggers = False
    formatters = {
        "default": {
            "()": "uvicorn.logging.DefaultFormatter",
            "fmt": LOG_FORMAT,
            "datefmt": "%Y-%m-%d %H:%M:%S",
        },
    }
    handlers = {
        "default": {
            "formatter": "default",
            "class": "logging.StreamHandler",
            "stream": "ext://sys.stderr",
        },
    }
    loggers = {
        LOGGER_NAME: {"handlers": ["default"], "level": LOG_LEVEL},
    }


configLogger(LogConfig().dict())
logger = logging.getLogger(service_name)
