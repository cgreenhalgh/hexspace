export enum SocketState {
  // as websocket ReadyState
  CONNECTING = 0,
  OPEN = 1,
  CLOSING = 2,
  CLOSED = 3,
}

export enum SessionState {
  CLOSED,
  AUTHENTICATING,
  AUTHENTICATED,
  REJECTED
}

export interface State {
  wsurl: string;
  wsstate: SocketState;
  profileName: string;
  joinCode: string;
  wserror: boolean;
  sessionstate: SessionState;
}

