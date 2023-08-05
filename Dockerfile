FROM node:16.13.0

RUN mkdir -p /usr/src/socialsite-front
WORKDIR /usr/src/socialsite-front

RUN apt update && apt upgrade -y
RUN apt install git -y

COPY . /usr/src/socialsite-front/
#RUN npm install -D @element-plus/nuxt@1.0.4
#RUN npm install -g npm@9.6.6
RUN npm install
RUN npm run build
#RUN npm run dev &

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD [ "npm", "run", "dev" ]
