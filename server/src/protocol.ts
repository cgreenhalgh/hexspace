
export const PROTOCOL = 'hexspace:ws'
export const VERSION = 1

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
}

