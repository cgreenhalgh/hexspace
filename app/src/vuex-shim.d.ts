// vuex-shim.d.ts

import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'

declare module '@vue/runtime-core' {
  import type { State } from 'store/types'

  interface ComponentCustomProperties {
    $store: Store<State>,
    $connect: () => void
  }
}

