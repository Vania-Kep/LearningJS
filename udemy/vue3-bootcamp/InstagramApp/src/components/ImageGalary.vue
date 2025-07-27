<script setup>
    import Container from './Container.vue';
    import { ref, defineProps } from 'vue';

    const props = defineProps(['posts']);

    const open = ref(false);
    const modalImg = ref('');
    const modalCaption = ref('');
    const zoomPost = (e) => {
        modalImg.value = e.target.src;
        modalCaption.value = e.target.alt;
        open.value = true;
    }
    const handleCancel = () => {
        open.value = false;
        modalCaption.value = '';
    }
</script>
<template>
    <Container>
        <div class="image-gallary-container">
            <div
                v-for="post in posts"
                :key="post.id"
            >
                <img
                    :src="`https://xuayslhplmadovjgvhkv.supabase.co/storage/v1/object/images/${post.imgUrl}`"
                    onerror="this.src = 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'"
                    :alt="post.caption"
                    @click="zoomPost">
            </div>
        </div>
    </Container>
        <div>
            <a-modal v-model:open="open" width="800px" :title="modalCaption" @cancel="handleCancel" :footer="null">
                <img class="zoomed"
                onerror="this.src = 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'"
                :src="modalImg">
            </a-modal>
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

img.zoomed {
    width: 100%
}
</style>