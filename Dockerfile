FROM node:16.16.0
WORKDIR /api
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
RUN npx prisma generate
CMD [ "npm", "run", "start:dev" ]
