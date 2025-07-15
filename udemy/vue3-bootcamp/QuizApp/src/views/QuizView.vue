<script setup>
    import Question from '@/components/Question.vue';
    import QuizHeader from '@/components/QuizHeader.vue';
    import QuizResult from '@/components/QuizResult.vue';
    import { useRoute, RouterLink } from 'vue-router';
    import { ref } from 'vue';
    import quizes from '../data/quizes.json';

    const route = useRoute();
    const quizId = parseInt(route.params.id);
    const quiz = quizes.find(q => q.id === quizId);

    let currentQuestionIndex = ref(0);
    let numberOfCorrectAnswers = ref(0);
    let quizCompleted = ref(false);

    let currentQuestion = quiz ? quiz.questions[currentQuestionIndex.value] : null;

    const onOptionSelected = (isCorrect) => {
        if (isCorrect) {
            numberOfCorrectAnswers.value++;
        }

        currentQuestionIndex.value++;

        if (currentQuestionIndex.value < quiz.questions.length) {
            currentQuestion = quiz.questions[currentQuestionIndex.value];
        } else {
            quizCompleted.value = true;
        }
    }
</script>

<template>
    <main>
        <div v-if="quiz">
            <QuizHeader :currentQuestionIndex="currentQuestionIndex" :quizName="quiz.name" :questionsCount="quiz.questions.length"/>

            <div v-if="!quizCompleted">
                <Question
                    :question="quiz.questions[currentQuestionIndex]"
                    @optionSelected="onOptionSelected"/>
            </div>
            <div v-else class="completed">
                <QuizResult :numberOfCorrectAnswers="numberOfCorrectAnswers" :questionsCount="quiz.questions.length"/>
            </div>
        </div>
        <div v-else>
            <p>Quiz not found.</p>
            <RouterLink :to="'/'">Go Back</RouterLink>
        </div>
    </main>
</template>

<style scoped>
    main {
        max-width: 1000px;
        width: 100%;
        margin: 0 auto;
        padding: 20px;
    }
</style>