CONTAINER_IMAGE ?= rag-inference
BUILD_VERSION ?= latest
CONTAINER_TAG ?= ${BUILD_VERSION}

init-py-env:
	rm -rf env && \
	python3 -m venv env && \
	source env/bin/activate

pip-install:
	python3 -m pip install --upgrade pip && \
	python3 -m pip install -r app/requirements.txt

start:
	python3 app/main.py
	#cd app && uvicorn main:devServer --reload --host 0.0.0.0 --port 8001

docker:
	docker build --no-cache -t ${CONTAINER_IMAGE}:${CONTAINER_TAG} -f Dockerfile .

start-docker:
	docker run --rm -p 8001:8001 ${CONTAINER_IMAGE}:${CONTAINER_TAG}

openapi:
	python3 app/gen_openapi_spec.py

test:
	@echo "TODO: no tests to run"
