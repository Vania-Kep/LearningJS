<script setup>
    import GrandChild from './GrandChild.vue';
    import { inject } from 'vue';
    import useSymbols from '@/composables/useSymbols';

    const numbers = inject('numbers');

    const {symbols, addSymbol} = useSymbols();
</script>
<template>
    <div class="component-wrpr" style="border-color: purple;">
        <h1>Child Component</h1>
        {{ numbers }}<br>
        {{ symbols }}<br>
        <button @click="addSymbol('=')">Add Symbol</button>
        <div class="line"></div>
        <GrandChild/>
    </div>
</template>

<style scoped>
</style>