FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

#We can manage expose here too instead of compose file
#EXPOSE 80 443

CMD ["node", "index.js"]
