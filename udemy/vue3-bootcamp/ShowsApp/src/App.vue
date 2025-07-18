<script setup>
  import LastAirbenderCards from './components/LastAirbenderCards.vue';
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
  </main>
</template>

<style scoped>
</style>
