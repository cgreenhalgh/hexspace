import * as express from 'express';
import * as http from 'http';
import * as WebSocket from 'ws';
import { Message, MessageType, PROTOCOL, VERSION, ClientHelloMessage, ServerHelloMessage } from './protocol'
import { ConnectionState, ClientInfo } from './types'

// single placeholder join code
// TODO rooms, etc
const DEFAULT_JOIN_CODE = '12345'

const app = express();

//initialize a simple http server
const server = http.createServer(app);

//initialize the WebSocket server instance
const wss = new WebSocket.Server({ server });

function rejectConnection(info: ClientInfo, message: string) {
  const msg: ServerHelloMessage = {
    protocol: PROTOCOL, 
    version: VERSION,
    type: MessageType.ServerHello,
    authenticated: false,
    message: message
  }
  console.log('reject connection '+info.clientId+': '+message)
  info.connectionState = ConnectionState.REJECTED
  info.ws.send(JSON.stringify(msg))
  info.ws.close()
}
wss.on('connection', (ws: WebSocket) => {
  const info : ClientInfo = {
    ws: ws,
    connectionState: ConnectionState.AUTHENTICATING
  } 
  //connection is up, let's add a simple simple event
  ws.on('message', (message: string) => {
    try {
      const msg = JSON.parse(message) as Message
 
      //log the received message and send it back to the client
      console.log('received: %s', message);
      //ws.send(`Hello, you sent -> ${message}`);
      if (info.connectionState == ConnectionState.AUTHENTICATING) {
        const clientHello = msg as ClientHelloMessage
        if (PROTOCOL != clientHello.protocol ||
            MessageType.ClientHello != clientHello.type ||
            VERSION != clientHello.version) {
          rejectConnection(info, 'invalid ClientHello')
          return
        }
        if (DEFAULT_JOIN_CODE != clientHello.code) {
          rejectConnection(info, 'invalid join code')
          return
        }
        console.log('authenticate client '+clientHello.clientId)
        info.clientId = clientHello.clientId
        info.connectionState = ConnectionState.AUTHENTICATED
        const reply: ServerHelloMessage = {
          protocol: PROTOCOL,
          version: VERSION,
          type: MessageType.ServerHello,
          authenticated: true,
          message: 'welcome'
        }
        info.ws.send(JSON.stringify(reply))

      } else {
        // TODO
        console.log('ignore message '+msg.type, msg)
      }
    } catch (ex) {
      console.log('error handling client', ex)
      ws.close()
    }
  });
});

//start our server
const port = process.env.PORT || 8081
server.listen(port, () => {
  console.log(`Server started on port ${port} :)`);
});

