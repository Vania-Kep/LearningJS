<script setup>
  import Parent from './components/Parent.vue';
  import {ref, provide} from 'vue';

  const numbers = ref([1,2,3,5,3,1,65]);

  provide('numbers', numbers);
</script>

<template>
  <main>
    <Parent/>
  </main>
</template>

<style scoped>
</style>
