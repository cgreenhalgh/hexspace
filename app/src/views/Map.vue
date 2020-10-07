<template>
  <div class="map">
  </div>
  <h1>Clients</h1>
  <div v-for="client in clients" :key="client.clientId">{{ client.profileName }} ({{ client.clientId }})</div>
  <h1>Hexs</h1>
  <div v-for="hex in hexs" :key="hex.hexId">{{hex.i}},{{hex.j}} is {{hex.state}}</div>
  <h1>Connections</h1>
  <div v-for="conn in connections" :key="conn.ids[0]+':'+conn.ids[1]">{{conn.ids[0]}}-&gt;{{conn.ids[1]}}, audio {{conn.hear[0]}}&lt;-&gt;{{conn.hear[1]}}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Map',
  components: {
  },
  computed: {
    clients() {
      return this.$store.state.clients
    },
    hexs() {
      return this.$store.state.hexs
    },
    connections() {
      return this.$store.state.connections
    }
  }
});
</script>
