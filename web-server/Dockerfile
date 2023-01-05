FROM node:16

WORKDIR /web-server

COPY package*.json ./

RUN npm install

COPY . /web-server

RUN npx tsc index.ts

EXPOSE 80

CMD ["node", "index.js"]