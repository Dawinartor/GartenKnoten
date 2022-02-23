FROM node:10-alpine
	
WORKDIR /nodeapp
COPY package*.json ./
RUN npm install

COPY . .

CMD [ "npm", "start" ]
