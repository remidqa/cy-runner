FROM node:20

RUN apt-get update -y
RUN apt-get -y install xvfb \
    libgtk2.0-0 \
    libgtk-3-0 \
    libgbm-dev \
    libnotify-dev \
    libgconf-2-4 \
    libnss3 \
    libxss1 \
    libasound2 \
    libxtst6 \
    xauth

WORKDIR /app

RUN npm install cypress --save-dev

COPY . .

RUN npm install cypress-mochawesome-reporter fastify glob-fs mochawesome-merge

CMD ["node","server.js"]

EXPOSE 5010