FROM node:14.12.0-alpine3.10

WORKDIR /usr/app

COPY ./package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start"]
