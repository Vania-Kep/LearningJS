<script setup>
    import { useRoute, useRouter, RouterView } from 'vue-router';
    import cars from '../data/cars.json';

    const route = useRoute();
    const carId = parseInt(route.params.id);
    const car = cars.find(c => c.id === carId);
    const router = useRouter();
</script>

<template>
    <div v-if="car">
        <h1>Cars View</h1>
        <p class="name">{{ car.name }}</p>
        <p class="year">{{ car.year }}</p>
        <p class="price">${{ car.price }}</p>
        <img :src="car.image" :alt="car.name" />
        <br>
        <button @click="router.push(`/cars/${carId}/contact`)">Show contacts</button>
        <RouterView />
    </div>
    <div v-else>
        <p>Car not found.</p>
    </div>
</template>