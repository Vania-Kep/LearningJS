<script setup>
  import LastAirbenderCards from './components/LastAirbenderCards.vue';
  import RickAndMortyCards from './components/RickAndMortyCards.vue';
</script>

<template>
  <header>
  </header>

  <main>
    <h1>Hero</h1>
    <Suspense>
      <template #default>
        <LastAirbenderCards />
      </template>
      <template #fallback>
        <div>Loading...</div>
      </template>
    </Suspense>
    <RickAndMortyCards />
  </main>
</template>

<style scoped>
</style>
