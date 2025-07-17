<script setup>
  import q from '../data/quizes.json';
  import { ref, watch } from 'vue';
  import Card from '../components/Card.vue';

  const quizes = ref(q);
  const search = ref('');

  watch(search, () => {
    if (search) {
      quizes.value = q.filter(quiz => quiz.name.toLowerCase().includes(search.value.toLowerCase()));
    } else {
      quizes.value = q;
    }
  });
</script>


<template>
  <div>
    <header>
      <h1>Quizes</h1>
      <input type="text" placeholder="Search quizes..." v-model.trim="search"/>
    </header>
    <div class="options-container">
      <TransitionGroup name="card" appear>
        <Card v-for="quiz in quizes" :key="quiz.id" :quiz="quiz" />
      </TransitionGroup>

    </div>
  </div>
</template>

<style scoped>
  header {
    margin: 30px 0 10px 0;
    display: flex;
    align-items: center;

    h1 {
      font-weight: bold;
      margin-right: 30px;
    }

    input {
      border: none;
      background-color: rgba(128, 128, 128, 0.1);
      padding: 10px;
      border-radius: 4px;
    }
  }

  .options-container {
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
    /* justify-content: space-between; */
  }

  /* Card Transitions */
  .card-enter-from {
    opacity: 0;
    transform: translateY(-50px);
  }
  .card-enter-to {
    opacity: 1;
    transform: translateY(0);
  }
  .card-enter-active {
    transition: all 0.5s ease;
  }
</style>