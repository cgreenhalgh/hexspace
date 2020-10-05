FROM node:12.18-stretch

WORKDIR /app

RUN npm install -g typescript

COPY package.json /app/package.json
#COPY package-lock.json /app/package-lock.json
RUN npm install 
COPY tsconfig.json /app/tsconfig.json
COPY src/ /app/src/
#RUN tsc

EXPOSE 8081


#CMD ["npm","start"]
CMD ["sleep","100000000"]
