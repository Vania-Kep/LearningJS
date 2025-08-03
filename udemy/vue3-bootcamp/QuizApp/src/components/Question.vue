<script setup>
    import {defineProps, defineEmits} from "vue";

    const {question} = defineProps(['question']);
    const emit = defineEmits(['optionSelected']);

    const emitOptionSelection = (isCorrect) => {
        emit('optionSelected', isCorrect);
    };
</script>

<template>
    <div class="quiz-question">
        <label>
            {{question.text}}
        </label>
        <ul>
            <li v-for="option in question.options" :key="option.id" @click="emitOptionSelection(option.isCorrect)">
                <p><span>{{option.label}}</span> {{option.text}}</p>
            </li>
        </ul>
    </div>
</template>

<style scoped>
    label {
        font-weight: bold;
        font-size: 27px;
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

</style>