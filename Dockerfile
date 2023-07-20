FROM node:16.14.2-alpine

RUN mkdir -p /mypet-api

WORKDIR /mypet-api

COPY routes /mypet-api/routes
COPY app.js package.json package-lock.json ./

RUN npm install --production

CMD npm start
