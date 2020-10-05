<template>
  <div class="profile-editor">
    <h1>Profile</h1>
    <label>Name: </label>
    <input type="text" v-model="profileName">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  computed: {
    profileName: {
      get () {
        return this.$store.state.profileName;
      },
      set (value) {
        this.$store.commit('updateProfile',{profileName: value});
      }
    }
  },
});
</script>

<style>
</style>

