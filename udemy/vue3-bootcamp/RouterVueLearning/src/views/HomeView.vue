<script setup>
  import cars from '../data/cars.json';
  import { RouterLink } from 'vue-router';

</script>

<template>
    <div>
        <h1>Home View</h1>
        <p>Welcome to the Home View of our Vue.js application!</p>
    </div>
    <h2>Car List</h2>
    <div class="cars">
        <RouterLink v-for="car in cars" :key="car.id" :to="`/cars/${car.id}`">
            <p>{{ car.name }} - ({{ car.year }})</p>
        </RouterLink>
    </div>
</template>


<style scoped>
    .cars {
        /* display: flex; */

        a {
            text-decoration: none;
            color: black;
            width: 100%;
            margin: 5px 0;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
        }
    }
</style>