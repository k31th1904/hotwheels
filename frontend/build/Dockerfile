FROM node:19-alpine
RUN mkdir -p /app
WORKDIR /app
COPY . /app
RUN npm install
ENTRYPOINT npm start
