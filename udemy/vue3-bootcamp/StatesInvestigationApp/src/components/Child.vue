<script setup>
    import GrandChild from './GrandChild.vue';
    import { inject } from 'vue';

    const numbers = inject('numbers');
</script>
<template>
    <div class="component-wrpr" style="border-color: purple;">
        <h1>Child Component</h1>
        {{ numbers }}
        <div class="line"></div>
        <GrandChild/>
    </div>
</template>

<style scoped>
</style>