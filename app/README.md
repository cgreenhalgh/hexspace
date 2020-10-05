# hexapp

Vue.js
version 3

## build/dev

```
sudo docker build -t hexapp .
```
```
sudo docker run -d \
  -v `pwd`/src:/app/src \
  -v `pwd`/public:/app/public \
  -p 8180:8080 --name=hexapp hexapp
sudo docker exec -it hexapp /bin/sh
```
```
npm serve
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

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
