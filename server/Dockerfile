FROM node:10.9.0-alpine

RUN mkdir /code

COPY package* /code/
COPY secrets.js /code/
COPY src /code/src

WORKDIR /code

RUN npm install

EXPOSE 8000

RUN adduser -D myuser
USER myuser

CMD npm start PORT=$PORT