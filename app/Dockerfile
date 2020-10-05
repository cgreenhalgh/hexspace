FROM node:12.18-stretch

WORKDIR /app
RUN npm install -g @vue/cli

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN npm install 
COPY babel.config.js /app/babel.config.js
COPY .eslintrc.js /app/.eslintrc.js
COPY .browserslistrc /app/.browserslistrc
COPY tsconfig.json /app/tsconfig.json
COPY src/ /app/src/
COPY public/ /app/public/
COPY tests/ /app/tests/

EXPOSE 8080

#CMD ["npm","start"]
CMD ["sleep","100000000"]
