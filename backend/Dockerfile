FROM <>

ARG DEBIAN_FRONTEND=noninteractive
RUN apt-get update && \
  apt-get -y upgrade && \
  apt-get install -yq curl vim git make net-tools gcc ca-certificates \
  libssl-dev build-essential curl python3 python3-pip

# Add user app
RUN useradd -u 1001 app

# Create the app directory and set permissions to app
RUN mkdir /home/app/ && chown -R app:app /home/app

WORKDIR /home/app

# run the application as user app
USER app

# copy the dependencies file to the working directory
COPY --chown=app:app app/requirements.txt .

# install dependencies
RUN pip3 install --user -r requirements.txt

# copy the content of the local src directory to the working directory
COPY --chown=app:app app/ .


# command to run on container start
CMD [ "python3", "main.py" ]