<script setup>
import { ref } from 'vue';
const {question} = defineProps(['question']);
const emits = defineEmits(['next']);
const selectedAnswer = ref(null);

function proceedToNextQuestion() {
  emits('next', selectedAnswer.value === question.answer);
  selectedAnswer.value = null;
}

</script>
<template>
  <div v-if="selectedAnswer">
    <div v-if="selectedAnswer === question.answer">
        Yor answer is correct!
    </div>
    <div v-else>Wrong! The correct answer is <span style="color:green">{{ question.answer }}</span></div>

    <button @click="proceedToNextQuestion">NEXT</button>
  </div>
  <div v-else>
    <h3>{{question.question}}</h3>
    <ul>
      <li v-for="option in question.options" :key="option" @click="selectedAnswer = option">{{ option }}</li>
    </ul>
  </div>
</template>
