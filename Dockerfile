# FROM node:18
# RUN mkdir -p /home/node/app && chown -R node:node /home/node/app
# WORKDIR /home/node/app
# COPY ./build ./
# COPY ./package.json ./
# COPY ./.env ./
# RUN npm install
# RUN npx prisma generate
# COPY ./prisma /home/node/app/prisma
# RUN npx prisma generate

# USER node

# COPY --chown=node:node .env .

# EXPOSE 3000


# CMD [ "ts-node-dev", "./src/index.js"  ]

FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npx prisma generate
RUN npm run build

EXPOSE 3000
CMD [ "node", "./build/src/index.js"  ]
