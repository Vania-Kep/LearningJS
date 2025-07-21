<script setup>
    import { defineProps } from 'vue';

    const props = defineProps(['posts']);
</script>
<template>
    <div class="image-gallary-container">
        <img
            v-for="post in posts"
            :key="post.id"
            :src="post.imgUrl"
            :alt="post.name">
    </div>
</template>

<style scoped>
.image-gallary-container {
    width: 100%;
    display: flex;
    justify-content: left;
    flex-wrap: wrap;

    img {
        margin: 5px;
        width: 200px;
    }
}
</style>