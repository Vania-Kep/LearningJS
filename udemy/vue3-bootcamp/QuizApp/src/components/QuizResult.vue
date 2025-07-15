<script setup>
    import {defineProps} from "vue";
    import { RouterLink } from 'vue-router';

    const {numberOfCorrectAnswers, questionsCount} = defineProps(['numberOfCorrectAnswers', 'questionsCount']);
    const correctAnswersRate = Math.round(numberOfCorrectAnswers * 100/questionsCount);
    let color = 'green';
    
    if (correctAnswersRate < 40) {
        color = 'red';
    } else if (correctAnswersRate < 70) {
        color = 'coral';
    }
</script>

<template>
    <div class="completed">
        <h4>Your results...</h4>
        <div class="result">{{ numberOfCorrectAnswers }}/{{ questionsCount }}</div>
        <div class="progress" :style="{borderColor: color}">
            <div class="bar" :style="{width: correctAnswersRate + '%', backgroundColor: color}"></div>
            <p class="progress-label">
                {{ correctAnswersRate }}% correct
            </p>
        </div>
        <RouterLink :to="'/'">Go Back</RouterLink>
    </div>
</template>

<style scoped>
    .completed {
        display: grid;
        font-size: 20px;
        text-align: center;
        justify-content: center;
        align-items: center;

        .result {
            font-size: 35px;
            font-weight: 300;
        }

        .progress {
            margin-bottom: 10px;
            height: 25px;
            width: 200px;
            border: 3px solid coral;
            position: relative;

            .bar {
                height: 100%;
                background-color: coral;
                width: 10%;
                transition: width 0.3s;
            }

            .progress-label {
                position: absolute;
                width: 100%;
                text-align: center;
                margin: 0;
                color: black;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                pointer-events: none;
            }
        }

        a {
            font-size: 15px;
        }
    }
</style>