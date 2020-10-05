import { App } from 'vue';
import { CommsOptions } from './types';

// comms/plugin.ts
export default {
  install(app: App, options: CommsOptions) {
    console.log('comms/plugin');
    // Plugin code goes here
    app.config.globalProperties.$connect = () => {
      console.log('connect');
    }
    // TODO
  }
};
