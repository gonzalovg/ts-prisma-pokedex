FROM node:18
RUN mkdir -p /home/node/app && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY ./build ./
COPY ./package.json ./
COPY ./.env ./
RUN npm install
RUN npx prisma generate
COPY ./prisma /home/node/app/prisma
RUN npx prisma generate

USER node

COPY --chown=node:node .env .

EXPOSE 3000


CMD [ "node", "./src/index.js"  ]

# CMD [ "node", ".build/index.js" ]