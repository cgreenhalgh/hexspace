// unused (plugin)
export interface CommsOptions {
  wsurl: string;
}

export enum SocketState {
  // as websocket ReadyState
  CONNECTING = 0,
  OPEN = 1,
  CLOSING = 2,
  CLOSED = 3,
  // extra states
  NEW = 4,
  RECONNECTING = 5,
  FAILED = 6
}

