<script setup>
    import { inject } from 'vue';

    const numbers = inject('numbers');
</script>
<template>
    <div class="component-wrpr" style="border-color: orange;">
        <h1>GrandGrandChild Component</h1>
        {{ numbers }}
        <div class="line"></div>
    </div>
</template>

<style scoped>
</style>