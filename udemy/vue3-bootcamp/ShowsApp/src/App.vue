<script setup>
  import { ref } from 'vue';
  import LastAirbenderCardsSuspense from './components/LastAirbenderCardsSuspense.vue';
  import RickAndMortyCards from './components/RickAndMortyCards.vue';
  import Hero from './components/Hero.vue';

  const isLastAirbender = ref(true);
</script>

<template>
  <header>
    <Hero
      :isLastAirbender="isLastAirbender"
      @selectShow="isLastAirbender = !isLastAirbender"
    />
  </header>

  <main>
    <!-- <LastAirbenderCardsSuspense v-if="isLastAirbender"/>
    <RickAndMortyCards v-else/> -->
    <KeepAlive>
      <Component :is="isLastAirbender ? LastAirbenderCardsSuspense : RickAndMortyCards" />
    </KeepAlive>
  </main>
</template>

<style scoped>
</style>
