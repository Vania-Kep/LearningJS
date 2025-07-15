<script setup>
    import { RouterLink } from 'vue-router';
    import { defineProps } from 'vue';

    const props = defineProps(['quiz']);
</script>

<template>
  <RouterLink :to="`quiz/${quiz.id}`">
      <div class="card">
          <img :src="quiz.img" :alt="quiz.name">
          <div class="card-text">
            <h2>{{ quiz.name }}</h2>
            <p>{{quiz.questions.length}} Questions</p>
          </div>
      </div>
  </RouterLink>
</template>
<style scoped>
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