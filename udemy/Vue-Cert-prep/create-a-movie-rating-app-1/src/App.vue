<script setup>
import { ref } from "vue";
import { StarIcon } from "@heroicons/vue/24/solid";
import { items } from "./movies.json";
const movies = ref(items);
const showModal = ref(false);

const genres = ref([ 'Fiction', 'doc', "Action", "Crime", "Drama" ]);

const newName = ref('');
const newDescription = ref('');
const newImge = ref('');
const newGenres = ref([]);
const inTheaters = ref(false);

function updateRating(movieIndex, rating) {
  movies.value[movieIndex].rating = rating;
}

function showAddMovieModal() {
  showModal.value = !showModal.value;
}

function createMovie() {
  movies.value.unshift({
    id: new Date().getTime(),
    name: newName.value,
    description: newDescription.value,
    image: newImge.value,
    genres: newGenres.value,
    inTheaters: inTheaters.value
  });

  showModal.value = false;
}
</script>

<template>
  <div class="app">
    <button class="add-movie" @click="showAddMovieModal">Add Movie</button>
    <div class="overflow" v-if="showModal"></div>
    <div class="add-movie-modal" v-if="showModal">
      <form @submit.prevent="createMovie">
        <div class="form-el-wrpr">
          <label for="name">Name</label><br>
          <input type="text" name="name" id="name" v-model="newName">
        </div>
        <div class="form-el-wrpr">
          <label for="description">Description</label><br>
          <textarea name="description" id="description" v-model="newDescription"></textarea>
        </div>
        <div class="form-el-wrpr">
          <label for="image">Image</label>
          <input type="url" name="image" id="image" v-model="newImge">
        </div>
        <div class="form-el-wrpr">
          <label for="genres">Genres</label><br>
          <select multiple v-model="newGenres">
            <option v-for="genre in genres" :key="genre" value="genre"> {{ genre }}</option>
          </select>
        </div>
        <div class="form-el-wrpr">
          <input type="checkbox" name="inTheaters" id="inTheaters" v-model="inTheaters">
          <label for="inTheaters">In Theaters</label>
        </div>

        <div class="actions">
          <button type="button" @click="showModal = !showModal">Cancel</button>
          <button>Create</button>
        </div>
      </form>
    </div>

    <div class="movie-list">
      <div
        class="movie-item"
        v-for="(movie, movieIndex) in movies"
        :key="movie.id"
      >
        <div class="movie-item-image-wrapper">
          <div class="movie-item-star-wrapper">
            <StarIcon
              class="movie-item-star-rating-icon"
              :class="[movie.rating ? 'text-yellow-500' : 'text-gray-500']"
            />
            <div class="movie-item-star-content-wrapper">
              <span
                v-if="movie.rating"
                class="movie-item-star-content-rating-rated"
              >
                {{ movie.rating }}
              </span>
              <span v-else class="movie-item-star-content-rating-not-rated">
                -
              </span>
            </div>
          </div>
          <img :src="movie.image" class="movie-item-image" alt="" />
        </div>

        <div class="movie-item-content-wrapper">
          <div class="movie-item-title-wrapper">
            <h3 class="movie-item-title">{{ movie.name }}</h3>
            <div class="movie-item-genres-wrapper">
              <span
                v-for="genre in movie.genres"
                :key="`${movie.id}-${genre}`"
                class="movie-item-genre-tag"
                >{{ genre }}</span
              >
            </div>
          </div>
          <div class="movie-item-description-wrapper">
            <p class="movie-item-description">{{ movie.description }}</p>
          </div>
          <div class="movie-item-rating-wrapper">
            <span class="movie-item-rating-text">
              Rating: ({{ movie.rating }}/5)
            </span>

            <div class="movie-item-star-icon-wrapper">
              <button
                v-for="star in 5"
                :key="star"
                class="movie-item-star-icon-button"
                :class="[
                  star <= movie.rating ? 'text-yellow-500' : 'text-gray-500',
                ]"
                :disabled="star === movie.rating"
                @click="updateRating(movieIndex, star)"
              >
                <StarIcon class="movie-item-star-icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.add-movie {
  background-color: aqua;
  padding: 10px;
  border-radius: 10px;
  position: absolute;
  top: 0px;
  right: 20px;
}

.add-movie-modal {
  position: absolute;
  width: 50%;
  background: white;
  z-index: 99;
  top: 100px;
}

.overflow {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: black;
  z-index: 98;
  opacity: 0.6;
}
.form-el-wrpr {
  margin: 20px;
}
input, textarea, select {
  background-color: antiquewhite;
  width: 100%;
  border: 2px solid grey;
  border-radius: 10px;
  margin: 5px 0;
}

input[type=checkbox] {
  width: auto;
    margin: 10px;
}

.actions {
  margin: 20px;
  bottom: 0;
  position: relative;
  display: flex;
  justify-content: space-between;
}
</style>