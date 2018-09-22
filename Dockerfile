FROM node:latest
RUN mkdir -p /src/app
WORKDIR /src/app
COPY . /src/app

# RUN service mysql_start
# RUN mysql_start
# RUN usr/local/opt/mysql@5.7/bin/mysql.server start

RUN npm install
EXPOSE 9001
CMD ["npm", "run", "start_prod"]

