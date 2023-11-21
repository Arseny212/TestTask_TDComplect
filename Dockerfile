FROM node:16
WORKDIR /usr/src/app
COPY package*.json ./
COPY package-lock.json .
RUN npm install
COPY . .
RUN npm run build
EXPOSE 4173
CMD ["npm", "run", "start"]