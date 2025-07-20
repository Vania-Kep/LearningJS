<script setup lang="ts">
import { ref, computed } from 'vue';
import Cards from './components/Cards.vue';
import { GENDER, type Invitee } from './types';

const name = ref('');
const gender = ref<GENDER>(GENDER.MALE);
const invitees = ref<Invitee[]>([]);

const addInvitee = () :void => {
  if (name.value) {
    invitees.value.push({
      id: Math.floor(Math.random() * 10000000),
      name: name.value,
      gender: gender.value
    });

    name.value = '';
    gender.value = GENDER.MALE;
  }
};

  const count2 = computed<{
    female: number,
    male: number
  }>(() => {
    return invitees.value.reduce((currentObj, invitee) => {
      if (invitee.gender === GENDER.MALE) {
        return {
          ...currentObj,
          male: currentObj.male + 1
        }
      }

      return {
        ...currentObj,
        female: currentObj.female + 1
      }
    }, {male: 0, female: 0})
  });

</script>

<template>
  <main>
    <div>
      <h1>People invited to my party</h1>
      <input
        type="text"
        v-model="name"
        placeholder="Name..."
        @keypress.enter="addInvitee"
      >
      <select name="sex" id="" v-model="gender" @keypress.enter="addInvitee">
        <option :value="GENDER.MALE">Male</option>
        <option :value="GENDER.FEMALE">Female</option>
      </select>
      <div class="cards-container">
        <Cards v-for="invitee in invitees" :key="invitee.id" :invitee="invitee" />
      </div>
      <div>
        <p>Females - {{ count2.female }}</p>
        <p>Males - {{ count2.male }}</p>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: antiquewhite;
  color: black;
}

input, select {
  width: 100%;
  padding: 5px;
  height: 30px;
  margin-bottom: 2px;
}

.cards-container {
}
</style>
