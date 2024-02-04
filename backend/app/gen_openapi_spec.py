from fastapi.openapi.utils import get_openapi
from server.server import Server
import json


with open('../docs/openapi.json', 'w') as f:
    json.dump(get_openapi(
        title=Server.title,
        version=Server.version,
        openapi_version=Server.openapi_version,
        description=Server.description,
        routes=Server.routes
    ), f)
