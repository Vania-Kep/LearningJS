<script setup>
    import { useRoute, RouterLink } from 'vue-router';
    import { ref } from 'vue';
    import quizes from '../data/quizes.json';

    const route = useRoute();
    const quizId = parseInt(route.params.id);
    const quiz = quizes.find(q => q.id === quizId);
    let result = ref(0);
    let quizCompleted = ref(false);

    let currentQuestionNo = ref(0);
    let currentQuestion = quiz ? quiz.questions[currentQuestionNo.value] : null;

    const handleAnswer = (optionId , t) => {
        const seletedOption = currentQuestion.options.find((itm) => itm.id === optionId);

        if (seletedOption.isCorrect) {
            result.value++;
        }

        currentQuestionNo.value++;

        if (currentQuestionNo.value < quiz.questions.length) {
            currentQuestion = quiz.questions[currentQuestionNo.value];
        } else {
            quizCompleted.value = true;
        }
    }
</script>

<template>
    <main>
        <div v-if="quiz">
            <h1>{{quiz.name}} Quiz</h1>

            <div v-if="currentQuestion">
                <h3>Question {{ currentQuestionNo }}/{{ quiz.questions.length }}</h3>
                <progress id="file" :max="quiz.questions.length" :value="currentQuestionNo"></progress>
                <div class="quiz-question" v-if="!quizCompleted">
                    <label>
                        {{currentQuestion.text}}
                    </label>
                    <ul>
                        <li v-for="option in currentQuestion.options" :key="option.id" @click="handleAnswer(option.id)">
                            <p><span>{{option.label}}</span> {{option.text}}</p>
                        </li>
                    </ul>
                </div>

                <div v-else class="completed">
                    <h4>Your results...</h4>
                    <div class="result">{{ result }}/{{ quiz.questions.length }}</div>
                    <RouterLink :to="'/'">Go Back</RouterLink>
                </div>
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

        h1 {
            margin-bottom: 20px;
        }

        label {
            font-weight: bold;
            font-size: 27px;
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

        ul {
            padding: 0px;
        }
        li {
            cursor: pointer;
            list-style-type: none;
            font-size: 20px;
            width: 500px;
            max-width: 500px;
            background-color: rgb(228, 225, 225);
            margin: 5px;

            span {
                background-color: rgb(250, 193, 85);
                padding: 5px;
            }
        }

        .completed {
            font-size: 20px;
            text-align: center;

            .result {
                font-size: 35px;
                font-weight: 300;
            }

            a {
                font-size: 15px;
            }
        }
    }
</style>