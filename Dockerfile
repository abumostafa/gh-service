FROM node:14-alpine

LABEL maintainer="Ahmed Abumostafa <iam.abumostafa@gmail.com>"

WORKDIR /var/www/api

RUN apk update && apk add --virtual .build_deps python supervisor

COPY .docker/etc/supervisor.d /etc/supervisor.d
COPY . .

RUN npm i

CMD ["/usr/bin/supervisord", "-c", "/etc/supervisord.conf"]
