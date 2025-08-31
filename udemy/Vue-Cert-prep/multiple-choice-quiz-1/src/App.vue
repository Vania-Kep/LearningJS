<script setup>
import {ref}  from 'vue'
import Quiz from './Quiz.vue';

const isQuizInProgress = ref(false)

</script>

<template>
    <div v-if="!isQuizInProgress">
        <button @click="isQuizInProgress = true">Start New Quiz</button>

    </div>
    <div v-else>
        <Quiz/>
    </div>

</template>

<style scoped>
div {
    color: white;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;

    button {
        font-size: 3rem;
    }
}
</style>

