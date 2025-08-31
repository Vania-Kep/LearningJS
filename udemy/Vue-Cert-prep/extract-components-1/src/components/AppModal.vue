<script setup>
const props = defineProps(['title']);
const emits = defineEmits(['close']);

function closeModal() {
    emits('close');
}
</script>

<template>
    <div class="modal-wrapper">
      <div class="modal-wrapper-inner">
            <slot name="header">
                <header>
                    <h3 v-if="title">{{ props.title }}</h3>
                    <div @click="closeModal">X</div>
                </header>
            </slot>
            <slot name="default"/>
            <slot name="footer"/>
        </div>
    </div>
</template>

<style scoped>
header {
    display: flex;
    position: relative;

    div {
        position: absolute;
        right: 10px;
    }
}
</style>