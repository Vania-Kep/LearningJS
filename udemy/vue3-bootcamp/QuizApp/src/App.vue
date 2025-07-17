<script setup>
  import { RouterView } from 'vue-router';

</script>

<template>
  <div class="container">
    <transition name="rote">
      <RouterView />
    </transition>
  </div>
</template>

<style scoped>
  .container {
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;
    padding: 20px;
  }

  /* ROTE ANIMATION */
  .rote-enter-from {
    opacity: 0;
    transform: translateX(100px);
  }
  .rote-enter-to {
    opacity: 1;
    transform: translateX(0);
  }
  .rote-enter-active {
    transition: all 1s ease;
  }
</style>