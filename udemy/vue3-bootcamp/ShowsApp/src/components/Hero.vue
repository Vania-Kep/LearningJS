<script setup>
  import {ref, watch, defineProps, defineEmits} from 'vue';

  const emit = defineEmits(['selectShow']);
  const {isLastAirbender} = defineProps(['isLastAirbender']);

  const emitSelectedShow = () => emit('selectShow');
</script>

<template>
  <div class="hero">
    <h1>{{ isLastAirbender ? 'Last Airbender' : 'Rick and Morty' }}</h1>
    <p @click="emitSelectedShow">{{ !isLastAirbender ? 'Last Airbender' : 'Rick and Morty' }}</p>
  </div>
</template>

<style scoped>
.hero {
    height : 40vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    flex-direction: column
}
.hero img {
    position: absolute;
    height: 700px;
    opacity: 0.1;
}
.hero h1 {
    font-size: 100px;
    font-weight: bold;
}
.hero p {
    cursor: pointer;
}
</style>
