FROM openjdk:19
ADD target/spring-boot-data-jpa-0.0.1-SNAPSHOT.jar app.jar
ENV db_port 3307
ENV db_name tools
ENV db_password password@2020

EXPOSE 8080
ENTRYPOINT ["java","-jar","app.jar"]

#1. cd .\backend\
#2. docker build -t mybackend-container .
#3. docker run -it -p 8080:8080 --name mybackend-container mybackend-image
#-e db_port/db_name/db_password = sent to the mydb-container