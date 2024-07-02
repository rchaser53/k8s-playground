FROM node:22
WORKDIR /app
COPY ./ /app
RUN npm ci
RUN chmod 755 /app/app.sh
RUN echo 123
EXPOSE 3000
CMD [ "npm", "start" ]
