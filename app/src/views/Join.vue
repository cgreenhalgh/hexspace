<template>
  <div class="join">
    <div>Join...</div>
    <profile-editor></profile-editor>
    <join-prompt></join-prompt>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProfileEditor from '@/components/ProfileEditor.vue'; // @ is an alias to /src
import JoinPrompt from '@/components/JoinPrompt.vue';

export default defineComponent({
  name: 'Join',
  components: {
    ProfileEditor,
    JoinPrompt,
  },
});
</script>
