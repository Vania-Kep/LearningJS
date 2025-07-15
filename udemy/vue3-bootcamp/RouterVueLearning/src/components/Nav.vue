<script setup>
  import { RouterLink } from 'vue-router';

</script>

<template>
    <div>
        <RouterLink active-class="active" to="/">Home</RouterLink>
        <RouterLink active-class="active" to="/about">About</RouterLink>
        <RouterLink active-class="active" to="/contact">Contact</RouterLink>
    </div>

</template>
<style scoped>
    div {
        display: flex;
        gap: 10px;
    }

    .active {
        font-weight: bold;
        color: blue;
    }
</style>