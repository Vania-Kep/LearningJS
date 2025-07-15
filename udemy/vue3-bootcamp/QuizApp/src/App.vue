<script setup>
  import { RouterView } from 'vue-router';

</script>

<template>
  <div class="container">
    <RouterView />
  </div>
</template>

<style scoped>
  .container {
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;
    padding: 20px;
  }
</style>