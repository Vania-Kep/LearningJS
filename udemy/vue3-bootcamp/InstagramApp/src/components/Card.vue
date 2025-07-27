<script setup>
    import { supabase } from '@/superbase';
    import { useRouter } from 'vue-router';
    import { defineProps } from 'vue';

    const props = defineProps(['post']);

    const roter = useRouter();
    const navigateToPostOwner = async () => {
      const {data: postOwner} = await supabase.from('users').select().eq('id', props.post.owner_id).single();

      roter.push(`/profile/${postOwner.username}`)
    }
</script>
<template>
  <ACard v-if="post" hoverable style="width: 240px" class="timeline-card">
    <template #cover>
      <img
        @click="navigateToPostOwner"
        :alt="props.post.caption"
        :src="`https://xuayslhplmadovjgvhkv.supabase.co/storage/v1/object/images/${post.imgUrl}`"
        onerror="this.src = 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'"/>
    </template>
    <ACardMeta>
      <template #description v-if="post.caption">{{post.caption}}</template>
    </ACardMeta>
  </ACard>
</template>

<style scoped>
.timeline-card {
    margin-bottom: 20px;
}
</style>