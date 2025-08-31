<script setup>
import { ref } from 'vue';
const fishTypes = ref({
    goldenPurpleFish: '../public/golden-purple-fish.png',
    goldfish: '../public/goldfish.png',
    guppie: '../public/guppie.png',
    tropicalFish: '../public/tropical-fish.png',
    tuna: '../public/tuna.png'
});

const selectedFishType = ref('');
const name = ref('');

function handleFishFormSubmit () {
    
}
</script>
<template>
    <form @submit.prevent="handleFishFormSubmit">
        <div>
            <div class="fishes">
                <h3>Fish Type</h3>
                <div class="fish-options">
                    <div v-for="(value, key) in fishTypes" :key="key" class="fish-option">
                        <input type="radio" name="fish-type" :value="key" :id="key"  v-model="selectedFishType"/><label :for="key"><img :src="value"/></label>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <label for="name">Name</label><br>
            <input type="text" class="text" name="name" v-model="name">
        </div>
        <button>Add Fish</button>
    </form>
</template>
<style scoped>
form {
    color: white;
    font-weight: 500;
}
.fish-options {
    display: ruby;
}

.fish-option {
    width: 100px;
    height: 100px;

    input {
        display: none;
    }
    label {
        display: block;
        width: 100px;
    }
    input[type="radio"]:checked + label img {
        /* background-color: blue; */
        box-shadow: 0 0 15px rgba(0, 0, 255, 0.5);
        font-weight: bold;
        filter: brightness(1.4) contrast(2);
    }
}

button {
    background-color: blue;
    border-radius: 4px;
    padding: 10px;
    margin: 10px;
}
</style>
