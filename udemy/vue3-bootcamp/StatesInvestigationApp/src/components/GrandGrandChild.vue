<script setup>
    import { inject } from 'vue';
    import useSymbols from '@/composables/useSymbols';

    const numbers = inject('numbers');

    const {symbols} = useSymbols();
</script>
<template>
    <div class="component-wrpr" style="border-color: orange;">
        <h1>GrandGrandChild Component</h1>
        {{ numbers }}<br>
        {{ symbols }}
        <div class="line"></div>
    </div>
</template>

<style scoped>
</style>