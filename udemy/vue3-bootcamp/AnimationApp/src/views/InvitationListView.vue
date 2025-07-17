<script setup>
  import { ref, Transition } from 'vue';

  const list = ref (['Barbara', 'John Doe', 'Jane DOe', 'jake Paul', 'Selina Damo', 'Kevine Johnstone', 'Daniel Dum']);
  const errorMsg = ref('');

  const addToList = event => {
    const value = event.target.value.trim();

    if (value.length < 3) {
      errorMsg.value = 'Too Short.';

      return;
    }

    if (list.value.includes(value)) {
      errorMsg.value = 'Name exists';

      return;
    }

    errorMsg.value = '';

    list.value.unshift(value);
    event.target.value = '';
  }

  const removeItem = event => {
    const item = event.target.parentElement.textContent.slice(0, -1).trim();
    list.value = list.value.filter(i => i !== item);
  };

</script>

<template>
  <main>
    <div class="container">
      <H1>Invitation List</H1>
      <h3>TransitionGroup component</h3>
      <div class="field-wrpr" :class="{ error: !!errorMsg }">
        <input
          type="text"
          placeholder="Person to invite..."
          @keyup.enter="addToList"
          @focusout="errorMsg=''"
        >
        <div v-if="errorMsg" class="error-msg">{{ errorMsg }}</div>
      </div>
      <TransitionGroup name="invitees" tag="ul">
        <li v-for="item of list" :key="item">
          <div>
            {{ item }}
            <span @click="removeItem">x</span>
          </div>
        </li>
      </TransitionGroup>
    </div>
  </main>
</template>

<style scoped>
  main {
    width: 100%;
    height: 100%;
  }

  .container {
    max-width: 300px;
    margin: auto;

    h3 {
      margin-bottom: 40px;
    }

    .field-wrpr {
      width: 100%;
      margin-bottom: 30px;

      &.error input {
        border: 1px solid red;
        box-shadow: 1px 1px 10px red;
      }
    }

    input {
      width: 100%;
      border-radius: 5px;
      border: 1px solid rgba(128, 128, 128, 0.13);
      padding: 10px;
      margin-bottom: 5px;
      box-shadow: 1px 1px 10px rgba( 0, 0, 0, 0.12);
    }
    .error-msg {
      position: absolute;
      color: red;
      font-size: 12px;
    }

    ul {
      list-style: none;
      margin: 0px;
      padding: 0px;

      li {
        list-style: none;
        width: 300px;
        border-radius: 5px;
        padding: 5px 10px;
        margin-top: 10px;
        box-shadow: 1px 1px 10px rgba( 0, 0, 0, 0.12);
        text-align: center;
        cursor: pointer;

        div {
          position: relative;

          span {
            position: absolute;
            right: 5px;
            padding: 0px 5px;
          }
        }

      }
    }
  }

  /* Transition Group */
  .invitees-enter-from {
    opacity: 0;
    transform: scale(0.5);
  }

  .invitees-leave-from,
  .invitees-enter-to {
    opacity: 1;
  }

  .invitees-leave-to {
    opacity: 0;
    transform: scale(0.5) translateX(20px);
  }

  .invitees-leave-active {
    transition: all 0.5s ease;
    position: absolute;
  }

  .invitees-enter-active,
  .invitees-move {
    transition: all 0.5s ease;
  }
</style>