<script setup>
import { ref, computed, watch } from "vue";
import { items } from "@/movies.json";
import { useRoute } from 'vue-router'
import MovieStarRating from "@/MovieStarRating.vue";

const route = useRoute();

// const movie = computed(() => {
//   return items.find(itm => itm.id === +route.params.id);
// });
const movie = ref(null);

watch(
  () => route.params.id,
  () => {
    movie.value = items.find(itm => itm.id === +route.params.id)
  },
  {immediate: true}
);
</script>
<template>
  {{ $router }}
  {{ $route }}
  <div
    class="container flex items-center max-w-6xl gap-4 p-10 m-auto dark:text-white"
  >
    <figure class="relative">
      <MovieStarRating :rating="movie.rating" class="absolute top-5 right-5" />
      <img :src="movie.image" :alt="movie.name" class="w-96" />
    </figure>

    <div>
      <h1 class="mb-4 text-5xl">{{ movie.name }}</h1>
      <div class="mb-3 movie-item-genres-wrapper">
        <span
          v-for="genre in movie.genres"
          :key="`${movie.id}-${genre}`"
          class="!text-lg movie-item-genre-tag"
          >{{ genre }}</span
        >
      </div>
      <p class="text-xl">{{ movie.description }}</p>
    </div>
  </div>
  <router-link :to="`/${movie.id-1}`">PREV</router-link>
  <router-link :to="`/${movie.id+1}`">NEXT</router-link>
</template>
