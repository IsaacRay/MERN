FROM node:11
RUN mkdir -p app
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY . .
EXPOSE 5000
USER node