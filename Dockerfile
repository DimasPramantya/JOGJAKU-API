FROM node:18.17-alpine
WORKDIR /app
ENV PORT 8080
COPY . .
RUN npm install
EXPOSE 8080
CMD [ "npm", "run", "start"]