<script setup lang="ts">
    import { GENDER, type Invitee } from '../types';
    import { defineProps } from 'vue';

    defineProps<{invitee: Invitee}>();
</script>

<template>
  <div :style="{backgroundColor: invitee.gender == GENDER.MALE ? 'rgb(8, 111, 111)' : 'rgb(111, 18, 8)'}">
    {{ invitee.name }}
  </div>
</template>

<style scoped>
div {
    background-color: aqua;
    height: 30px;
    border-radius: 5px;
    margin-top: 5px;
    text-align: center;
    padding: 3px;
    color: white;
}
</style>
