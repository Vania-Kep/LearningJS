<script setup>
    import {defineProps} from "vue";

    const {quizName, currentQuestionIndex, questionsCount} = defineProps(['quizName', 'currentQuestionIndex', 'questionsCount']);
</script>

<template>
    <header>
        <h1>{{quizName}} Quiz</h1>
        <h3>Question {{ currentQuestionIndex }}/{{ questionsCount }}</h3>
        <progress id="file" :max="questionsCount" :value="currentQuestionIndex"></progress>
    </header>
</template>

<style>
    h1 {
        margin-bottom: 20px;
    }
    progress {
        -webkit-appearance: none;
        height: 28px;
        width: 200px;
        margin-bottom: 20px;
    }
    ::-webkit-progress-value {
        background-color: rgb(249, 210, 137);
    }
    ::-webkit-progress-bar {
        background-color: transparent;
    }
    ::-webkit-progress-inner-element {
        border: 2px solid orange;
    }
</style>