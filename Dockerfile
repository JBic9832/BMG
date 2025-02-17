FROM node:lts AS runtime

RUN mkdir -p /app/src

COPY . .

RUN npm install
RUN npm run build

EXPOSE 4321

CMD node ./dist/server/entry.mjs 

