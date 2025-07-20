<script setup lang="ts">
import { ref } from 'vue';

const number = ref('');
</script>

<template>
  <main>
    <h1>Guess my Favorite Number</h1>
    <input type="text" v-model="number">
    <h2 v-if="number === '27'">You Guess it</h2>
  </main>
</template>

<style scoped>
</style>
