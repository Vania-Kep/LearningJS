<script setup>
    import { inject } from 'vue';
    import useSymbols from '@/composables/useSymbols';
    import {useDigitsStore} from '@/stores/digits';

    const digitsStore = useDigitsStore();

    const numbers = inject('numbers');

    const {symbols} = useSymbols();
</script>
<template>
    <div class="component-wrpr" style="border-color: orange;">
        <h1>GrandGrandChild Component</h1>
        {{ numbers }}<br>
        {{ symbols }}<br>
        {{ digitsStore.digits }} <button @click="digitsStore.addDigit(4)">Add Digit 4</button><br>
        Double Digits: {{ digitsStore.doubleDugit }}<br>
        Filtered Digits: {{ digitsStore.filterDigits(5) }}
        <div class="line"></div>
    </div>
</template>

<style scoped>
</style>