<script setup>
import { ref, computed } from 'vue';

import Question from './Question.vue';
const questions = [
  {
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    question: "Which planet is closest to the sun?",
    options: ["Earth", "Mars", "Venus", "Mercury"],
    answer: "Mercury",
  },
  {
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    answer: "Pacific Ocean",
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
    answer: "William Shakespeare",
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Gd", "Go"],
    answer: "Au",
  },
  {
    question: "Which country hosted the 2016 Summer Olympics?",
    options: ["China", "Brazil", "United Kingdom", "Russia"],
    answer: "Brazil",
  }
  // Add more questions as needed
];
const activeQuestionNo = ref(0);
const activeQuestion = computed(() => {
  return questions[activeQuestionNo.value];
})
const score = ref(0);
const isFinished = ref(false);

function nextQ(isCorrect) {
 if (isCorrect) score.value++;
 activeQuestionNo.value++;

 if (activeQuestionNo.value >= questions.length) {
    isFinished.value = true;
 }
}

function restartGame() {
    isFinished.value = false;
    activeQuestionNo.value = 0;
    score.value = 0;
}

</script>
<template>

  <div v-if="isFinished">
    Game Finished! <br>{{ score }} / {{ questions.length }}
    <br>
    <button @click="restartGame">Restart</button>
  </div>
  <Question v-else :question="activeQuestion" @next="nextQ"/>



</template>
