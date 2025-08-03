<script setup>
    import GrandChild from './GrandChild.vue';
    import { inject } from 'vue';
    import useSymbols from '@/composables/useSymbols';
    import {useDigitsStore} from '@/stores/digits';

    const digitsStore = useDigitsStore();

    const numbers = inject('numbers');

    const {symbols, addSymbol} = useSymbols();
</script>
<template>
    <div class="component-wrpr" style="border-color: purple;">
        <h1>Child Component</h1>
        {{ numbers }}<br>
        {{ symbols }} <button @click="addSymbol('=')">Add Symbol "="</button><br>
        {{ digitsStore.digits }}<br>
        <div class="line"></div>
        <GrandChild/>
    </div>
</template>

<style scoped>
</style>