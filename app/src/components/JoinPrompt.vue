<template>
  <div class="join-prompt">
   <div>
    <label>Code: </label>
    <input type="text" v-model="joinCode">
   </div>
   <div><button @click="join">Join</button></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'JoinPrompt',
  computed: {
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
    join(event) {
      this.$store.dispatch('join');
    }
  },
});
</script>

<style>
</style>

