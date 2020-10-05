import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
//import plugin from './comms/plugin'

createApp(App)
  .use(store)
  /*.use(plugin)*/
  .use(router).mount('#app')
