FROM node:8.11.9-alpine

ENV NPM_CONFIG_LOGLEVEL warn

COPY . .

RUN ["yarn", "global", "add", "serve"]
RUN yarn && yarn build && rm -rf node_modules

ENTRYPOINT ["serve", "-s", "build"]
EXPOSE 5000