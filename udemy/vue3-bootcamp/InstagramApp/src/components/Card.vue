<script setup>
    import { supabase } from '@/superbase';
    import { useRouter } from 'vue-router';
    import { ref, defineProps } from 'vue';

    const {VITE_BASE_PHOTO_URL} = import.meta.env;

    const props = defineProps(['post']);

    const roter = useRouter();
    const navigateToPostOwner = async () => {
      const {data: postOwner} = await supabase.from('users').select().eq('id', props.post.owner_id).single();

      roter.push(`/profile/${postOwner.username}`)
    }

    const isLoaded = ref(false);
    const loaded = (postId) => {
        console.log('loaded', postId)
        isLoaded.value = true;
    };
</script>
<template>
  <ACard v-if="post" hoverable style="width: 240px" class="timeline-card">
    <template #cover>
      <div v-if="!isLoaded" class="loading">
        <ASpin size="large"/>
      </div>
      <img
        v-show="isLoaded"
        @click="navigateToPostOwner"
        :alt="props.post.caption"
        :src="`${VITE_BASE_PHOTO_URL}${post.imgUrl}`"
        onerror="this.src = 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'"
        @load="loaded(props.post.id)"/>
    </template>
    <ACardMeta>
      <template #description>
        <div>{{new Date(post.created_at).toLocaleTimeString('ukr')}} {{ new Date(post.created_at).toLocaleDateString('ukr') }}</div>
        <div v-if="post.caption" class="caption">{{post.caption}}</div>
      </template>
    </ACardMeta>
  </ACard>
</template>

<style scoped>
.timeline-card {
    margin-bottom: 20px;

    .loading {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 250px;
    }
    .caption {
      font-weight: bold;
    }
}
</style>