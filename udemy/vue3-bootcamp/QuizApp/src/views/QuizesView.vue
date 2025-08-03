<script setup>
  import q from '../data/quizes.json';
  import { ref, watch } from 'vue';
  import Card from '../components/Card.vue';
  import gsap from 'gsap';

  const quizes = ref(q);
  const search = ref('');

  watch(search, () => {
    if (search) {
      quizes.value = q.filter(quiz => quiz.name.toLowerCase().includes(search.value.toLowerCase()));
    } else {
      quizes.value = q;
    }
  });

  const cardBeforeEnter = (el) => {
    // card-enter-from
    el.style.opacity = 0;
    el.style.transform = 'translatey(-70px)';
  };

  const cardEnter = (el, done) => {
    // card-enter-to
    gsap.to(el, {
      rotation: 0,
      duration: 2,
      ease: "elastic",
      opacity: 1,
      transform: 'translatey(0)',
      onComplete: done
    });
  };

  const cardBeforeLeave = (el) => {
    // card-leave-from
    el.style.opacity = 1;
    el.style.transform = 'translatey(0)';

  };

  const cardLeave = (el, done) => {
    // card-leave-to
    gsap.to(el, {
      y: 60,
      opacity: 0,
      duration: 0.5,
      onComplete: done
    });
  };
</script>


<template>
  <div>
    <header>
      <h1>Quizes</h1>
      <input type="text" placeholder="Search quizes..." v-model.trim="search"/>
    </header>
    <div class="options-container">
      <TransitionGroup
        appear
        @before-enter="cardBeforeEnter"
        @enter="cardEnter"
        @before-leave="cardBeforeLeave"
        @leave="cardLeave"
      >
        <Card v-for="(quiz, index) in quizes" :key="quiz.id" :quiz="quiz" :data-index="index"/>
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
  }
</style>