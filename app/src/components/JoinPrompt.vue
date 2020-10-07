<template>
  <div class="join-prompt">
   <div>
    <label>WS URL: </label>
    <input type="text" v-model="wsurl">
   </div>
   <div>
    <label>Code: </label>
    <input type="text" v-model="joinCode">
   </div>
   <div><button @click="join">Join</button></div>
   <div>
    <label>WS status: </label><span>{{ wsstate }}</span>
    <span v-if="!!wserror"> Error</span>
    <label>Session status: </label><span>{{ sessionstate }}</span>
    <span v-if="!!servererror"> Error: {{ servererror }}</span>
   </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'JoinPrompt',
  computed: {
    wsstate() {
      return this.$store.state.wsstate;
    },
    wserror() {
      return this.$store.state.wserror;
    },
    sessionstate() {
      return this.$store.state.sessionstate;
    },
    servererror() {
      return this.$store.state.servererror;
    },
    wsurl: {
      get() {
        return this.$store.state.wsurl;
      },
      set(value) {
        this.$store.commit('setWsurl', {wsurl: value});
      }
    },
    joinCode: {
      get () {
        return this.$store.state.joinCode;
      },
      set (value) {
        this.$store.commit('setJoinCode',{joinCode: value});
      }
    }
  },
  methods: {
    join() {
      this.$store.dispatch('join');
      //this.$connect()
    }
  },
});
</script>

<style>
</style>

