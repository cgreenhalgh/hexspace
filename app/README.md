# hexapp

Vue.js
version 3

## build/dev

Dev
```
sudo docker build -t hexapp .
```
```
sudo docker run -d \
  -v `pwd`/src:/app/src \
  -v `pwd`/public:/app/public \
  -v `pwd`/tests:/app/tests \
  -p 8180:8080 --name=hexapp hexapp
sudo docker exec -it hexapp /bin/sh
```
```
npm run serve
```
port 8180

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
