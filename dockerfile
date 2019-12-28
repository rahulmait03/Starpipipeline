FROM ubuntu:16.04


RUN apt-get update && apt-get install -y curl

RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -

RUN apt-get install -y nodejs

WORKDIR /project
ADD . /project/
RUN npm install
RUN npm install strapi@beta -g

ENTRYPOINT ["ng","serve"]
