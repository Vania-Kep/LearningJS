<script setup>
    import router from '@/router';
    import { RouterLink } from 'vue-router';

    const appNames = ['Color', 'Fade', 'Invitation List']

    const apps = router.options.routes.filter(r => appNames.includes(r.name));

</script>

<template>
  <div class="home">
    <h3>My Animation apps that I implemented in scope of this lesson</h3>
    <ul>
      <li v-for="rote in apps" :key="rote.name">
        <RouterLink  :to="rote.path" tag="li">{{ rote.name }}</RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
</style>