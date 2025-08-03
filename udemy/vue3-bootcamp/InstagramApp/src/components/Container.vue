<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="container">
        <slot></slot>
    </div>
</template>

<style scoped>
.container {
    /* width: 1000px; */
    max-width: 1000px;
    min-width: 450px;
    margin: 0 auto;
}
</style>
