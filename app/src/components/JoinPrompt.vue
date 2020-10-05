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
    <label>Status: </label><span>{{ wsstate }}</span>
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

