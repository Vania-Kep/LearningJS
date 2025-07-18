<script setup>
  import {defineProps} from 'vue';

  const {image, name, affiliation, allies} = defineProps([ 'image', 'name', 'affiliation', 'allies' ]);
</script>

<template>
  <n-card :title="name">
    <template #cover>
      <img :src="image">
    </template>
    <h3>{{ affiliation }}</h3>
    <div class="jobs">
      <p v-for="(ally, index) in allies" :key="ally">
        {{ ally }}
        <span v-if="index < allies.length-1">,&nbsp;</span>
      </p>
    </div>
  </n-card>
</template>

<style scoped>

.n-card {
    max-width: 300px;
    width: 300px;
    margin:10px 20px;

}
.n-card img {
    height: 250px
}

p {
    font-size: 10px;
}

.jobs {
    display: flex;
    flex-wrap: wrap;
}
</style>
