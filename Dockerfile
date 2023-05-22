FROM node:18

WORKDIR /usr/src/app

COPY package.json package-lock.json /usr/src/app/
RUN npm install

EXPOSE 9999
CMD ["node", "/usr/src/app/dist/main.js"]
