FROM node:16-alpine

WORKDIR /usr/server/app

COPY ./package.json ./

RUN npm install

COPY ./ .

EXPOSE 3000

RUN npm run dev
