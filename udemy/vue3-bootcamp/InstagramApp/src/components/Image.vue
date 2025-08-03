<script setup>
    import { ref, defineProps } from 'vue';

    const {VITE_BASE_PHOTO_URL} = import.meta.env;

    const props = defineProps(['post', 'hanldePostDeletion']);
    const isLoaded = ref(false);
    const loaded = (postId) => {
        console.log('loaded', postId)
        isLoaded.value = true;
    };
</script>
<template>
    <div v-if="!isLoaded" class="loading">
        <ASpin size="large"/>
    </div>
    <img
        v-show="isLoaded"
        :src="`${VITE_BASE_PHOTO_URL}${post.imgUrl}`"
        onerror="this.src = 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'"
        :alt="post.caption"
        @load="loaded(props.post.id)">
</template>

<style scoped>

img {
    margin: 5px;
    width: 200px;
    max-height: 300px;
    object-fit: cover;
}
.loading {
    margin: 5px;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 250px;
}
</style>