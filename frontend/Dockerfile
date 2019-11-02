FROM tiangolo/node-frontend:10 as build-stage

WORKDIR /app
COPY package*.json /app/ 
RUN npm install
COPY ./ /app/
RUN npm run build


FROM nginx:1.15

RUN ln -sf /dev/stdout /var/log/nginx/access.log && ln -sf /dev/stderr /var/log/nginx/error.log

COPY --from=build-stage /app/build/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf



