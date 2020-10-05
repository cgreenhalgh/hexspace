// vuex-shim.d.ts

import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'
import { SocketState } from 'comms/types'

declare module '@vue/runtime-core' {
  // Declare your own store states.
  interface State {
    wsurl: string,
    wsstate: SocketState,
    profileName: string,
    joinCode: string
  }

  interface ComponentCustomProperties {
    $store: Store<State>,
    $connect: () => void
  }
}

