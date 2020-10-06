# hex server

node.js

## build/dev

```
sudo docker build -t hexserver .
```
```
sudo docker run -d \
  -v `pwd`/src:/app/src \
  -p 8181:8081 --name=hexserver hexserver
sudo docker exec -it hexserver /bin/sh
```
```
tsc
node dist/server.js
```
port 8081

