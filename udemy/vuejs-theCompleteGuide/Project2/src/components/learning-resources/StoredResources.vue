<script>
import LearningResourceItem from './LearningResourceItem';
export default {
    components: {
        LearningResourceItem
    },
    inject: ['storedResources']
}
</script>

<template>
    <ul>
        <LearningResourceItem v-for="res in storedResources"
            :key="res.id"
            :id="res.id"
            :title="res.title"
            :description="res.description"
            :link="res.link"/>
    </ul>
</template>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>