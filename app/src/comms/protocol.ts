// TYPES

export interface Client {
  clientId: string;
  profileName: string;
}

export enum HexState {
  INVISIBLE,
  EMPTY
  // TODO
}

export interface Hex {
  hexId: string;
  i: number;
  j: number;
  state: HexState;
}

// first initiates
export interface Connection {
  ids: [string,string];
  hear: [boolean,boolean];
//  hearVolume: [number,number];
}

// MESSAGES


export const PROTOCOL = 'hexspace:ws'
export const VERSION = 2

export enum MessageType {
  ClientHello,
  ServerHello,
}

export interface Message {
  type: MessageType;
}

export interface ClientHelloMessage {
  protocol: string;
  version: number;
  type: MessageType.ClientHello;
  code: string;
  clientId: string;
}

export interface ServerHelloMessage {
  protocol: string;
  version: number;
  type: MessageType.ServerHello;
  authenticated: boolean;
  message: string;
  clients: Client[];
  hexs: Hex[];
  connections: Connection[];
}

