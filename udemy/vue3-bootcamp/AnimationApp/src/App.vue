<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Nav from './components/Nav.vue';
</script>

<template>
  <Nav />
  <transition name="page">
    <RouterView />
  </transition>
</template>

<style scoped>
body {
  background-color: white;
}

/* PAGE ANIMATION */
.page-enter-from {
  opacity: 0;
  transform: translateX(100px);
}
.page-enter-to {
  opacity: 1;
  transform: translateX(0);
}
.page-enter-active {
  transition: all 0.5s ease;
  
}

</style>
