<script setup>
    import { defineProps } from 'vue';

    const props = defineProps(['post'])
</script>
<template>
  <ACard v-if="post" hoverable style="width: 240px" class="timeline-card">
    <template #cover>
      <img alt="example" :src="post.imgUrl" />
    </template>
    <ACardMeta>
      <template #title><RouterLink :to="`/profile/${post.username}`">{{post.name}}</RouterLink></template>
      <template #description v-if="post.caption">{{post.caption}}</template>
    </ACardMeta>
  </ACard>
</template>

<style scoped>
.timeline-card {
    margin-bottom: 20px;
}
</style>