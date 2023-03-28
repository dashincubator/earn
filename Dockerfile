FROM node:latest

ARG DIRECTORY
ARG PRODUCTION=true

RUN mkdir -p $DIRECTORY
WORKDIR $DIRECTORY

ENV PATH $DIRECTORY/node_modules/.bin:$PATH

COPY package*.json ./

RUN npm install -g npm@latest
RUN npm install --production=$PRODUCTION

COPY . ./

CMD ["npm", "start"]
