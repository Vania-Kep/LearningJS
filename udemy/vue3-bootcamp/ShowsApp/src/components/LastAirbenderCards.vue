<script setup>
  import axios from "axios";
  import { ref, watch } from "vue";
  import Card from "./Card.vue";

  const characters = ref([]);

  let perPage = ref(8);
  let page = ref(1);

  function wait (t) {
    return new Promise((resolve) => setTimeout(resolve, t));
  }

  const response = await axios.get(`https://last-airbender-api.fly.dev/api/v1/characters?perPage=${perPage.value}&page=${page.value}`).then(await wait(1000));
  characters.value = response.data;

  watch(page, async () => {
    const res = await axios.get(`https://last-airbender-api.fly.dev/api/v1/characters?perPage=${perPage.value}&page=${page.value}`);
    characters.value = res.data;
  });

</script>

<template>
  <div class="container">
    <div class="button-container">
      <button @click="page > 1 ? page-- : null" :class="page > 1 ? '' : 'disabled'">&lt</button>
      <div class="page">{{ page }}</div>
      <button @click="page++">&gt</button>
    </div>
    <div class="cards">
      <transition-group name="card" appear>
        <Card
          v-for="character in characters"
          :key="character._id"
          :name="character.name || ''"
          :cardId="character._id"
          :image="character.photoUrl || ''"
          :isFlippable="true"
        >
          <h3 v-if="character.affiliation">{{character.affiliation }}</h3>
          <div class="jobs">
            <p v-for="(ally, index) in character.allies" :key="ally">
              {{ ally }}
              <span v-if="index < character.allies.length-1">,&nbsp;</span>
            </p>
          </div>
        </Card>
      </transition-group>
    </div>
    <div class="button-container">
      <button @click="page > 1 ? page-- : null" :class="page > 1 ? '' : 'disabled'">&lt</button>
      <div class="page">{{ page }}</div>
      <button @click="page++">&gt</button>
    </div>
  </div>
</template>

<style scoped>
.container {
    background-color: rgb(27, 26, 26);
    padding: 30px
}
.cards {
    max-width: 1290px;
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
    display: flex;
    align-items: center;
    justify-content: center;
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
