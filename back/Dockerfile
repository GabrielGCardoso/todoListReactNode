FROM node:10.16-alpine

RUN addgroup -S app && adduser -S -g app app

ENV HOME=/usr/src
WORKDIR ${HOME}/app
ENV NODE_PATH=.
ENV NODE_ENV=TEST

COPY ["./", "${HOME}/app/"]

RUN chmod +x ./wait-for && \
    npm install --silent --progress=false --production

EXPOSE 3000

CMD ["npm", "run", "dev-debug"]
