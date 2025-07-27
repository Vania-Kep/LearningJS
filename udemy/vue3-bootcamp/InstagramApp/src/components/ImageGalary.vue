<script setup>
    import Container from './Container.vue';
    import Image from './Image.vue';
    import { Modal } from 'ant-design-vue';
    import { ExclamationCircleOutlined } from '@ant-design/icons-vue';
    import { ref, defineProps, createVNode } from 'vue';
    import { supabase } from '@/superbase';
    import { useUserStore } from '@/stores/users';
    import { storeToRefs } from 'pinia';

    const {VITE_BASE_PHOTO_URL} = import.meta.env;

    const props = defineProps(['posts', 'hanldePostDeletion']);
    const userStore = useUserStore();
    const {user: loggedInUser} = storeToRefs(userStore);

    const open = ref(false);
    const modalImg = ref('');
    const modalCaption = ref('');
    const selectedPostId = ref(null);
    const canBeDeleted = ref(false);
    const zoomPost = (post) => {
        modalImg.value =`${VITE_BASE_PHOTO_URL}${post.imgUrl}`;
        modalCaption.value = post.caption;
        selectedPostId.value = post.id;
        canBeDeleted.value = parseInt(post.owner_id) === loggedInUser.value.id;
        open.value = true;
    }
    const handleCancel = () => {
        open.value = false;
        modalCaption.value = '';
        selectedPostId.value = null;
    }

    const showDeleteConfirm = (postId) => {
        Modal.confirm({
            title: 'Are you sure delete this post?',
            icon: createVNode(ExclamationCircleOutlined),
            content: '',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            async onOk() {
                console.log(`Deletting post with id ${postId}.`);
                const response = await supabase
                    .from('posts')
                    .delete()
                    .eq('id', postId)
                    .eq('owner_id', loggedInUser.value.id);

                if (!response.error) {
                    props.hanldePostDeletion(postId);
                    handleCancel();

                    const imageinBucket = modalImg.value.split('/images/')[1];
                    if (imageinBucket) {
                        await supabase.storage.from('images').remove([imageinBucket]);
                    }
                }
            }
        });
    };
</script>
<template>
    <Container>
        <div class="image-gallary-container">
            <div
                v-for="post in posts"
                :key="post.id"
                @click="zoomPost(post)"
            >
                <Image :post="post"/>
            </div>
        </div>
    </Container>
    <AModal v-model:open="open" :title="modalCaption" @cancel="handleCancel" :footer="null" >
        <img class="zoomed"
            onerror="this.src = 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'"
            :src="modalImg"
        >
        <div class="zoom-post-buttons" v-if="canBeDeleted">
            <AButton type="primary" danger @click="showDeleteConfirm(selectedPostId)">Delete</AButton>
        </div>
    </AModal>
</template>

<style scoped>
.image-gallary-container {
    width: 100%;
    display: flex;
    justify-content: left;
    flex-wrap: wrap;
}

img.zoomed {
    width: 100%;
}

.zoom-post-buttons {
    display: flex;
    justify-content: right;
}

.ant-modal-close {
    background-color: rgba(255, 255, 255, 0.8) !important;
}

</style>