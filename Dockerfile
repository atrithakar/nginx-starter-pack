FROM node:22-alpine

WORKDIR /app

COPY server.js /app/

EXPOSE 3000

CMD ["node", "server.js"]