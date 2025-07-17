<script setup>
  import { ref, Transition } from 'vue';

  const showText = ref (false);
</script>

<template>
  <main>
    <div class="container">
      <Transition name="color">
        <h1 v-if="showText">Hello World</h1>
      </Transition>
    </div>

    <button @click="showText=!showText">Toggle</button>
  </main>
</template>

<style scoped>
  .color-enter-from {
    background-color: yellow;
  }

  .color-enter-to {
    background-color: blue;
  }

  .color-enter-active {
    transition: all 4s ease;
  }
</style>