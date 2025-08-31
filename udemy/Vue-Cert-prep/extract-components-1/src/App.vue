<script setup>
import { computed, ref, defineAsyncComponent  } from "vue";

import MovieItem from "./components/MovieItem.vue";
import { items } from "./movies.json";

const MovieForm = defineAsyncComponent(() =>
  import('./components/MovieForm.vue')
);

const movies = ref(items);
const selectedMovie = ref(null);

function updateRating(mID, rating) {
  movies.value.find(m => {
    if (m.id === mID) {
      m.rating = rating;

      return true;
    }
  });
}
function removeMovie(mID) {
  movies.value = movies.value.filter(movie => movie.id !== mID);
}
function editMovie(mID) {
  selectedMovie.value = movies.value.find(m => m.id === mID);
  showForm(false);
}

function saveMovie(movie) {
  if (movie.id) {
    movies.value = movies.value.map((m) => {
      if (m.id === movie.id) {
        movie.rating = m.rating;
        return movie;
      }

      return m;
    });
  } else {
    movie.id = Number(Date.now());
    movies.value.push(movie);
  }
}


const showMovieForm = ref(false);
function hideForm() {
  showMovieForm.value = false;
  selectedMovie.value = null;
}

function showForm(addNew) {
  if (addNew) {
    selectedMovie.value = null;
  }

  showMovieForm.value = true;
}

const averageRating = computed(() => {
  const avg = movies.value
    .map((movie) => parseInt(movie.rating || 0))
    .reduce((a, b) => a + b, 0);

  return Number(avg / movies.value.length).toFixed(1);
});

const totalMovies = computed(() => {
  return movies.value.length;
});

const modalTitle = computed(() => {
  if (showMovieForm.value) {
    return selectedMovie.value ? `Update "${selectedMovie.value.name}" Movie` : 'Add Movie';
  }

  return '';
});

function removeRatings() {
  movies.value = movies.value.map((movie) => {
    movie.rating = 0;
    return movie;
  });
}
</script>

<template>
  <div class="app">
    <AppModal v-if="showMovieForm" :title="modalTitle" @close="hideForm">
      <MovieForm
        @close="hideForm"
        :model-value="selectedMovie"
        @save="saveMovie"/>
    </AppModal>
    <div class="movie-actions-list-wrapper">
      <div class="movie-actions-list-info">
        <span>Total Movies: {{ totalMovies }}</span>
        <span> / </span>
        <span>Average Rating: {{ averageRating }}</span>
      </div>
      <div class="flex-spacer"></div>
      <div class="movie-actions-list-actions">
        <button class="self-end movie-actions-list-action-button button-primary justify-self-end"
          @click="removeRatings">
          Remove Ratings
        </button>
        <button class="movie-actions-list-action-button" :class="{
          'button-primary': !showMovieForm,
          'button-disabled': showMovieForm,
        }" @click="showForm(true)" :disabled="showMovieForm">
          Add Movie
        </button>
      </div>
    </div>
    <div class="movie-list">
      <MovieItem
        class="movie-item group"
        v-for="movie in movies"
        :key="movie.id"
        :movie="movie"
        @edit-movie="editMovie"
        @remove-movie="removeMovie"
        @update:rating="updateRating" />
    </div>
  </div>
</template>
