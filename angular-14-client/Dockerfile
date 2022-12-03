# Build
FROM node:16-alpine as build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm i -g @angular/cli
RUN ng build --configuration production --output-path=/dist

# Run
FROM nginx:alpine
COPY --from=build /dist /usr/share/nginx/html

ENV API_URL 8080
# When the container starts, replace the env.js with values from environment variables
CMD ["/bin/sh","-c",  "envsubst < /usr/share/nginx/html/assets/env.template.js > /usr/share/nginx/html/assets/env.js && exec nginx -g 'daemon off;'"]

#1. cd .\angular-14-client\
#2. docker build -t myfrontend-image .
#3. docker run -it -e API_URL="9090" -p 9200:80 --name myfrontend-container myfrontend-image
#9200 is the port to be accessed from the host machine
#API_URL is ths port in which backend is running

