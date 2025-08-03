<script setup>
  import LastAirbenderCards from './LastAirbenderCards.vue';
</script>

<template>
  <Suspense>
    <template #default>
      <LastAirbenderCards />
    </template>
    <template #fallback >
      <div class="cards spinner">
        <div>
          <div>Loading...</div>
          <n-spin size="large" />
        </div>
      </div>
    </template>
  </Suspense>
</template>

<style scoped>
  .cards {
    height: 400px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .n-spin-body {
      width: 100%;
    }
  }
</style>
