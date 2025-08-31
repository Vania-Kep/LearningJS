<script setup>
import FishForm from './FishForm.vue';
import Aquarium from './Aquarium.vue';
</script>
<template>
    <div class="app-wrapper">
        <FishForm class="fish-form"/>
        <Aquarium></Aquarium>
    </div>

</template>

<style scoped>
.app-wrapper {
    display: flex;
    width: 100%;
    height: 100%;
    background-color: rgb(30 30 76);
}
.fish-form {
    width: 25%;
    height: 100%;
}

</style>