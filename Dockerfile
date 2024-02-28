FROM node:16.14.2-alpine

RUN mkdir -p /mypet-api

WORKDIR /mypet-api

COPY config /mypet-api/config
COPY constants /mypet-api/constants
COPY routes /mypet-api/routes
COPY handlers /mypet-api/handlers
COPY methods /mypet-api/methods
COPY lib /mypet-api/lib
COPY models /mypet-api/models
COPY migrations /mypet-api/migrations
COPY models /mypet-api/models
COPY app.js package.json package-lock.json ./

RUN npm install --production

CMD npm start
