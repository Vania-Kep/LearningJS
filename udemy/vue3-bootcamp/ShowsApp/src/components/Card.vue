<script setup>
  import {ref, watch, defineProps} from 'vue';
  import axios from "axios";

  const FIRST_INVALID_VAL = '\"';


  const flipped = ref(false);
  const {cardId, image, name, isFlippable} = defineProps(['cardId', 'image', 'name', 'isFlippable']);
  const cardDetails = ref(null);


  watch(() => cardId, ()=> {
    if (flipped.value) {
      flipped.value = false;
    }
    cardDetails.value = null;
  });

  watch(flipped, async() =>{
    if (!cardDetails.value && flipped.value) {
      const res = await axios.get(`https://last-airbender-api.fly.dev/api/v1/characters/${cardId}`);
      cardDetails.value = res.data;
    }
  });

</script>

<template>
  <div @click="flipped=isFlippable ? !flipped : false" >
    <div style="width:320px; height: 420px; overflow: hidden;">
    <transition name="flip">
      <n-card v-if="!flipped" :title="name" >
        <template #cover>
          <img :src="image" onerror="this.src = 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'">
        </template>
        <slot></slot>
      </n-card>
      <div v-else>
        <n-card v-if="cardDetails" :title="name">
          <div v-if="cardDetails.gender">Gender: {{ cardDetails.gender }}</div>
          <div v-if="cardDetails.hair">Hair: {{ cardDetails.hair }}</div>
          <div v-if="cardDetails.weapon">Weapon: {{ cardDetails.weapon }}</div>
          <div v-if="cardDetails.first && cardDetails.first !== FIRST_INVALID_VAL">First: {{ cardDetails.first }}</div>
          <div v-if="cardDetails.affiliation">Affiliation: {{ cardDetails.affiliation }}</div>
          <div v-if="cardDetails.position">Position: {{ cardDetails.position }}</div>
          <div v-if="cardDetails.profession">Profession: {{ cardDetails.profession }}</div>
          <div v-if="cardDetails.allies.length" class="jobs">
            Allies:
            <span v-for="(ally, index) in cardDetails.allies" :key="ally">
              {{ ally }}
              <span v-if="index < cardDetails.allies.length-1">,&nbsp;</span>
            </span>
          </div>
          <div v-if="cardDetails.enemies.length" class="jobs">
            Enemies:
            <span v-for="(enemy, index) in cardDetails.enemies" :key="enemy">
              {{ enemy }}
              <span v-if="index < cardDetails.enemies.length-1">,&nbsp;</span>
            </span>
          </div>
        </n-card>
        <div v-else class="card-placeholder">
          <n-spin size="large" />
          Loading...
        </div>
      </div>
    </transition>
    </div>
  </div>
</template>

<style scoped>

.card-placeholder {
    max-width: 300px;
    height: 400px;
    width: 300px;
    margin:10px 20px;
    text-align: center;
    display: grid;
    border: 1px solid white;
}

.n-card {
    max-width: 300px;
    height: 400px;
    width: 300px;
    margin:10px 20px;

}
.n-card img {
    min-height: 250px;
    height: 250px;
}

.flip-leave-active {
  transition: all 0.3s ease-out;
}
.flip-leave-to,
  .flip-enter-from {
  transform: rotateY(90deg);
}

.flip-enter-active {
  transition: all 0.3s ease-out;
  transition-delay: 0.3s;
}
</style>
