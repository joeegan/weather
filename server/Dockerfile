FROM node:10.9.0-alpine

RUN mkdir /code

COPY package* /code/
COPY secrets.js /code/
COPY src /code/src

WORKDIR /code

RUN npm install

EXPOSE 8000

CMD [ "npm", "start" ]