FROM node:18-bullseye

RUN apt update && \
    apt install autoconf automake g++ make

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]
