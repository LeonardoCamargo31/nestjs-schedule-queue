FROM node:18.18.1-alpine

RUN npm install -g @nestjs/cli

USER node

WORKDIR /home/node/app

