<script setup>

const { number, type } = defineProps(['number', 'type']);
</script>

<template>
    <div class="segment">
        <div class="number-wrpr">
            <transition name="tick">
                <div class="number" :key="number">{{ number }}</div>
            </transition>
        </div>
        <div class="type">{{ type }}</div>
    </div>
</template>

<style scoped>
.segment {
    margin: 20px;
    div {
        width: 100%;
        text-align: center;
    }
}

.number-wrpr {
    height: 1rem;
    overflow: hidden;
}

.tick-enter-from {
    transform: translateY(-10px);
    opacity: 0.1;
}
.tick-enter-to {
    transform: translateY(0);
}

.tick-enter-active,
.tick-leave-active {
    transition: all 0.4s ease;
}


.tick-leave-to {
    transform: translateY(10px);
    opacity: 0.1;
}
</style>
