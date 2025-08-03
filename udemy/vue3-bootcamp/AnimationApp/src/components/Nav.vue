<script setup>
    import router from '@/router';
    import { RouterLink } from 'vue-router';
</script>

<template>
    <main class="navigation-menu">
        <RouterLink v-for="rote in router.options.routes" :key="rote.name" :to="rote.path" active-class="active">{{ rote.name }}</RouterLink>
    </main>
</template>

<style scoped>
    main {
        font-size: 20px;
        margin-bottom: 40px;

    }

    a {
        display: inline;
        margin-right: 10px;
        padding: 5px;
        color: slategrey;
        text-decoration: none;

        &:hover {
            background: radial-gradient(circle, #e3ffe7 80%, transparent 100%);
            font-weight: bold;
        }
    }

    .active {
        font-weight: bold;
        color: darkslategray;
        text-decoration: underline;
    }
</style>
