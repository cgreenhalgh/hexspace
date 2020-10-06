import { createStore } from 'vuex'
import { State, SocketState, SessionState } from './types';
import { PROTOCOL, VERSION, MessageType, ClientHelloMessage } from '../comms/protocol';

interface WSMgr {
  websocket?: WebSocket;
}
const ws: WSMgr = {
  websocket: undefined
}

const clientId = 'TODO'

function sendHello(websocket: WebSocket, code: string) {
  const msg: ClientHelloMessage = {
    protocol: PROTOCOL,
    version: VERSION,
    type: MessageType.ClientHello,
    code: code,
    clientId: clientId,
  }
  const js = JSON.stringify(msg)
  console.log('send '+js)
  websocket.send(js)
}

export default createStore({
  state: {
    profileName: 'Anon',
    joinCode: '12345',
    wsurl: 'ws://localhost:8181',
    wsstate: SocketState.CLOSED,
    wserror: false,
    sessionstate: SessionState.CLOSED,
  } as State,
  mutations: {
    updateProfile(state, {profileName}) {
      state.profileName = profileName;
    },
    setJoinCode(state, {joinCode}) {
      state.joinCode = joinCode;
    },
    setWsurl(state, {wsurl}) {
      state.wsurl = wsurl;
    },
    setWsstate(state, wsstate: SocketState) {
      state.wsstate = wsstate;
    },
    setWserror(state, wserror: boolean) {
      state.wserror = wserror;
    },
    clearWserror(state) {
      state.wserror = false;
    },
    setSessionstate(state, sessionstate: SessionState) {
      state.sessionstate = sessionstate;
    }
  },
  actions: {
    join({commit, state}) {
      console.log(`Join, wsurl=${state.wsurl}, name=${state.profileName}, code=${state.joinCode}`);
      // TODO
      if (ws.websocket != undefined) {
        delete ws.websocket.onopen
        delete ws.websocket.onclose
        delete ws.websocket.onerror
        delete ws.websocket.onmessage
        console.log('close old socket')
        ws.websocket.close()
        delete ws.websocket
      }
      if (!ws.websocket) {
        console.log('new socket')
        commit('setWsstate', SocketState.CONNECTING)
        ws.websocket = new WebSocket(state.wsurl);
        ws.websocket.onopen = () => {
          console.log('wsopen - code='+state.joinCode)
          commit('clearWserror')
          commit('setWsstate', SocketState.OPEN)
          if (ws.websocket) {
            sendHello(ws.websocket, state.joinCode)
            commit('setSessionstate', SessionState.AUTHENTICATING)
          }
        }
        ws.websocket.onclose = () => {
          console.log('wsclose')
          // careful, also happens after error
          commit('setWsstate', SocketState.CLOSED)
        }
        ws.websocket.onerror = () => {
          // sorry, no useful information
          console.log('wserror')
          commit('setWserror', true)
          commit('setWsstate', SocketState.CLOSED)
        }
        ws.websocket.onmessage = (event: MessageEvent) => {
          console.log('wsmessage', event)
        }
      }

    }
  },
  modules: {
  }
})
