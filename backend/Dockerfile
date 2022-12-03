FROM maven:3.8.3-openjdk-16
WORKDIR /usr/src/backend
#Copy files (backend-project) to docker image
COPY . .

ENV db_port 3307
ENV db_name tools
ENV db_password password@2020

EXPOSE 8080
ENTRYPOINT ["mvn","spring-boot:run"]

#1. cd .\backend\
#2. cd .\backend\
#3. docker run -it -p 8080:8080 --name mybackend-container mybackend-image
#-e db_port/db_name/db_password = sent to the mydb-container