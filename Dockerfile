#Create MySQL Image for our db container 
FROM mysql

ENV MYSQL_ROOT_PASSWORD password@2020
#Creates database called tools
ENV MYSQL_DATABASE tools
EXPOSE 3306

#Run: docker run -it -p 3307:3306 --name mydb-container mydb-image
#3307 is the port to be accessed from the host machine - will be sent to the backend image
