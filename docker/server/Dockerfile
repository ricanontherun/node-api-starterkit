# Current LTS at the time.
FROM node:8.11

WORKDIR /var/www/app

RUN npm install -g pm2 && npm install

EXPOSE 7197

CMD npm run start-docker