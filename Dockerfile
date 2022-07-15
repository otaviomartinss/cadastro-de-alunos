FROM node:16.16.0
WORKDIR /api
COPY package*.json ./
COPY . .
RUN npm install
RUN npm run build
EXPOSE 3000
CMD [ "npm run start:dev" ]
