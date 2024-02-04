from common.logging import logger, log_level
from common.common import service_name
import uvicorn


from server.server import Server
devServer = Server


def main():
    logger.info(f"Starting {service_name} app")

    config = uvicorn.Config(
            "server.server:Server", 
            host="0.0.0.0",
            port=8001,
            log_level=log_level.lower())
    server = uvicorn.Server(config)
    server.run()

    logger.info(f"{service_name} started...")


if __name__ == '__main__':
    main()
