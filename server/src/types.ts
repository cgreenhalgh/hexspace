import * as WebSocket from 'ws';

export enum ConnectionState {
  CLOSED,
  AUTHENTICATING,
  AUTHENTICATED,
  REJECTED
}

export interface ClientInfo {
  clientId?: string;
  ws: WebSocket;
  connectionState: ConnectionState;
}

