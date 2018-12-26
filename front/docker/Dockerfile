# FROM node:10.14.2-jessie as angular-built
FROM tiangolo/node-frontend:10 as angular-built
WORKDIR /usr/src/app
RUN npm i -g @angular/cli
COPY package.json package.json
RUN npm install --silent
COPY . .
RUN ng build --output-path=./dist/out
#CMD [ "ng serve" ]
FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/
COPY --from=angular-built /usr/src/app/dist/out /usr/share/nginx/html/
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
CMD [ "nginx", "-g", "daemon off;" ]



