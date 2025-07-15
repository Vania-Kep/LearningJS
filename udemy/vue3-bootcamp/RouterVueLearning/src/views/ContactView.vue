<script setup>
    import { useRoute, RouterView } from 'vue-router';
    import cars from '../data/cars.json';

    const route = useRoute();
    const car = cars.find(c => c.id === parseInt(route.params.id));
</script>

<template>
    <div v-if="car.contact">
        <h1>Contact Info</h1>
        <p>{{car.contact.dealer}}</p>
        <p>{{car.contact.number}}</p>
    </div>
    <div v-else>
        <h5>No Contact Info</h5>
    </div>
</template>