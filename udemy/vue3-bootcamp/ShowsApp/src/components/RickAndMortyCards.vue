<script setup>
  import axios from "axios";
  import { ref, watch, onMounted } from "vue";
  import Card from "./Card.vue";

  const characters = ref(null);
  const page = ref(1);

  onMounted( async ()=> {
    const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${page.value}`);

    characters.value = response.data.results;
  });

  watch(page, async () => {
    const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${page.value}`);
    characters.value = response.data.results;
  });
</script>

<template>
  <div v-if="characters" class="container">
    <div class="button-container">
      <button @click="page > 1 ? page-- : null" :class="page > 1 ? '' : 'disabled'">&lt</button>
      <div class="page">{{ page }}</div>
      <button @click="page++">&gt</button>
    </div>
    <div class="cards">
      <transition-group name="card" appear>
        <Card
          v-for="character in characters"
          :key="character.id"
          :name="character.name || ''"
          :cardId="character.id"
          :image="character.image || ''"
          :isFlippable="false"
        >
        <p>{{ character.location.name }}</p>
          <h3 v-if="character.affiliation">{{character.affiliation }}</h3>
        </Card>
      </transition-group>
    </div>
    <div class="button-container">
      <button @click="page > 1 ? page-- : null" :class="page > 1 ? '' : 'disabled'">&lt</button>
      <div class="page">{{ page }}</div>
      <button @click="page++">&gt</button>
    </div>
  </div>
    <div v-else>
      <div class="container-loading spinner">
        <div>
          <div>Loading...</div>
          <n-spin size="large" />
        </div>
      </div>
    </div>
</template>

<style scoped>
.container {
    background-color: rgb(27, 26, 26);
    padding: 30px;
}
.cards {
    max-width: 1360px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
}
.cards h3 {
    font-weight: bold;
}
.cards p {
    font-size: 10px;
}
.jobs {
    display: flex;
    flex-wrap: wrap;
}
.button-container {
    display: flex;
    justify-content: center;
    padding-top: 30px 0;

}
.page {
  font-size: 25px;
  padding: 5px 10px 5px 10px;
}

.button-container button {
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    margin: 0 5px;
    cursor: pointer;

    &.disabled {
      cursor: not-allowed;
    }
}
.spinner {
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.n-spin-body {
  width: 100%;
}

.card-enter-from {
  opacity: 0;
}
.card-enter-to {
  opacity: 1;
}
.card-enter-active {
  transition: all 0.8s ease;
}
</style>
