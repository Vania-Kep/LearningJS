<!-- SCRIPT via Composition API -->
<!-- <script setup>
  // This is a simple Vue 3 component for a counter application
  import { ref } from 'vue';

  const count = ref(0); // Reactive variable to hold the count value
  const increment = () => {
    count.value++;
  };
  const decrement = () => {
    count.value--;
  };
  const reset = () => {
    count.value = 0;
  };
</script> -->

<!-- SCRIPT via Options API  -->
<script>
 // The same functionality using the Options API
  export default {
    data() {
        return {
            count: 0
        };
    },
    methods: {
        increment() {
            this.count++;
        },
        decrement() {
            this.count--;
        },
        reset() {
            this.count = 0;
        }
    }
  };
</script>

<template>
  <main>
    <h4>The current count is...</h4>
    <h1>{{ count }}</h1>
    <button @click="decrement">-</button>
    <button @click="increment">+</button>
    <br />
    <button @click="reset">Reset</button>
  </main>
</template>

<style scoped>
main {
  text-align: center;
  margin-top: 50px;
}
h4 {
  font-size: 1.5rem;
  color: #ffc;
}
h1 {
  font-size: 3rem;
  color: #7f7f7f;
}
button {
  margin: 10px;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
}
button:hover {
  background-color: #0056b3;
}
</style>