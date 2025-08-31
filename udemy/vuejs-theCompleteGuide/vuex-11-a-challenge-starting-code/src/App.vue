<template>
  <the-header></the-header>
  <router-view v-slot="{ Component }">
    <Transition name="page" mode="out-in">
        <component :is="Component" />
    </Transition>
  </router-view>
</template>

<script>
import TheHeader from './components/nav/TheHeader.vue';

export default {
  components: {
    TheHeader
  },
  data() {
    return {
      cart: { items: [], total: 0, qty: 0 },
    };
  },
  provide() {
    return {
    };
  },
  methods: {
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.page-enter-from {
  transform: translateX(-200px);
  opacity: 0;

}
.page-enter-active {
  transition: all 0.2s ease-in;
}
.page-enter-to {
  transform: translateX(0);
  opacity: 1;
}

.page-leave-from {
  transform: translateX(0);
  opacity: 1;
}
.page-leave-active {
  transition: all 0.2s ease-out;
}
.page-leave-to {
  transform: translateX(200px);
  opacity: 0;
}
</style>