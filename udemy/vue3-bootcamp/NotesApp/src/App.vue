<script setup>
  import { ref } from 'vue';

  const showModal = ref(false);
  const newNote = ref('');
  const isNewNoteValid = ref(true);
  const notes = ref([]);

  const addNote = () => {
    if (!validateNewNote()) {
      return;
    }

    // Logic to add a note

    notes.value.push({
      id: Math.floor(Math.random() * 1000000),
      text: newNote.value,
      date: new Date(),
      bgColor: `hsl(${Math.floor(Math.random() * 360)}, 70%, 80%)`
    });

    // reset the modal and note input
    showModal.value = false;
    newNote.value = '';
  };

  const closeModal = () => {
    showModal.value = false;
    newNote.value = '';
    isNewNoteValid.value = true;
  };

  const validateNewNote = () => {
    isNewNoteValid.value = newNote.value.length >= 3;

    return isNewNoteValid.value;
  };
</script>

<template>
  <main>
    <div class="overlay" v-if="showModal">
      <div class="modal">
        <textarea name="note" id="note" cols="30" rows="7" v-model.trim="newNote" @change="validateNewNote"></textarea>
        <p class="error" v-if="!isNewNoteValid">This field is required. Minimum 3 symbols required.</p>
        <button @click="addNote">Add Note</button>
        <button class="close" @click="closeModal">Close</button>
      </div>
    </div>

    <div class="container">
      <header>
        <h1>Notes</h1>
        <button @click="showModal=true">+</button>
      </header>
      <div class="cards-container">
        <div
          v-for="note in notes"
          :key="note.id"
          class="card"
          :style="{backgroundColor: note.bgColor}"
        >
          <p class="main-text">{{ note.text }}</p>
          <p class="date">{{ note.date.toLocaleDateString('uk-UA') }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
  main {
    height: 100vh;
    width: 100vw;
  }

  .container {
    max-width: 1000px;
    padding: 10px;
    margin: 0 auto;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    font-weight: bold;
    margin-bottom: 25px;
    font-size: 75px;
  }

  header button {
    border: none;
    padding: 10px;
    width: 50px;
    height: 50px;
    cursor: pointer;
    background-color: rgb(161, 159, 159);
    border-radius: 100%;
    color: white;
  }

  .card {
    color: rgb(33, 33, 33);
    width: 225px;
    height: 225px;
    background-color: rgb(237, 182, 44);
    padding: 10px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 20px;
    margin-bottom: 20px;
  }

  .date {
    font-size: 12.5px;
    font-weight: bold;
  }

  .cards-container {
    display: flex;
    flex-wrap: wrap;
  }

  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.65);
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modal {
    width: 750px;
    background-color: white;
    border-radius: 10px;
    padding: 30px;
    position: relative;
    display: flex;
    flex-direction: column;

    .error {
      color: red;
    }

    button {
      padding: 10px 20px;
      font-size: 20px;
      width: 100%;
      background-color: rgb(161, 159, 159);
      color: white;
      border: none;
      cursor: pointer;
      margin-top: 15px;
      background-color: green;

      &.close {
        background-color: brown;
        margin-top: 7px;
      }
    }
  }

</style>