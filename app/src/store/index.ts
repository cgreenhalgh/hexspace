import { createStore } from 'vuex'
import { SocketState } from '../comms/types';

interface WSMgr {
  websocket?: WebSocket;
}
const ws: WSMgr = {
  websocket: undefined
}

export default createStore({
  state: {
    profileName: 'Anon',
    joinCode: '12345',
    wsurl: 'ws://localhost',
    wsstate: SocketState.NEW,
  },
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
    }
  },
  actions: {
    join({commit, state}) {
      console.log(`Join, wsurl=${state.wsurl}, name=${state.profileName}, code=${state.joinCode}`);
      // TODO
      if (!ws.websocket) {
        commit('setWsstate', SocketState.CONNECTING)
        ws.websocket = new WebSocket(state.wsurl);
        ws.websocket.onopen = () => {
          console.log('wsopen')
          commit('setWsstate', SocketState.OPEN)
        }
        ws.websocket.onclose = () => {
          console.log('wsclose')
          commit('setWsstate', SocketState.CLOSED)
        }
        ws.websocket.onerror = (event: Event) => {
          console.log('wserror', event)
          commit('setWsstate', SocketState.FAILED)
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
