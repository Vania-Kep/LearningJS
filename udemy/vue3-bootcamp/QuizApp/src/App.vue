<script setup>
  import q from './data/quizes.json';
  import { ref, watch } from 'vue';

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
  <div class="container">
    <header>
      <h1>Quizes</h1>
      <input type="text" placeholder="Search quizes..." v-model.trim="search"/>
    </header>
    <div class="options-container">
      <div
        v-for="quiz in quizes"
        :key="quiz.id"
        class="card"
      >
        <img :src="quiz.img" :alt="quiz.name">
        <div class="card-text">
          <h2>{{ quiz.name }}</h2>
          <p>{{quiz.questions.length}} Questions</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .container {
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;
    padding: 20px;
  }

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

  /* Card styles */
  .card {
    width: 250px;
    overflow: hidden;
    border-radius: 2%;
    box-shadow: 1px 1px 5px rgba(183, 111, 1, 0.974);
    margin-right: 20px;
    margin-bottom: 35px;
    cursor: pointer;

    img {
      width: 100%;
      height: 190px;
      margin: 0;
    }

    .card-text {
      padding: 0 5px;

      h2 {
        font-weight: bold;
      }

      p {
        color: #666;
        margin-top: 5px;
      }
    }
  }

</style>