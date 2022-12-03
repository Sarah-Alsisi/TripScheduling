FROM node:16-alpine
WORKDIR /usr/src/app
#Copy files (angular-project) to docker image
COPY . .
#Install angular
RUN npm i -g @angular/cli
#Install packages
RUN npm install && npm run build

EXPOSE 4200
ENTRYPOINT ["ng","serve","--host", "0.0.0.0"]

#1. cd .\angular-14-client\
#2. docker build -t myfrontend-image .
#3. docker run -it -p 9200:4200 --name myfrontend-container myfrontend-image
#9200 is the port to be accessed from the host machine
