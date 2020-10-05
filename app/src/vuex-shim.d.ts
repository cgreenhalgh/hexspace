// vuex-shim.d.ts

import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'

declare module '@vue/runtime-core' {
  // Declare your own store states.
  interface State {
    profileName: string,
    joinCode: string
  }

  interface ComponentCustomProperties {
    $store: Store<State>,
    $connect: () => void
  }
}

