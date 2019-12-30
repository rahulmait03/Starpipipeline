FROM strapi/base

WORKDIR ./

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 1337

ENV NODE_ENV development

CMD ["yarn", "start"]
