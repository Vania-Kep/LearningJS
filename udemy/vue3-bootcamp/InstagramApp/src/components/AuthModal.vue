<script setup>
    import { ref, defineProps } from 'vue';

    const props = defineProps(['isLogin']);

    const open = ref(false);
    const confirmLoading = ref(false);

    const showModal = () => {
        open.value = true;
    };
    const handleOk = () => {
        confirmLoading.value = true;
        setTimeout(() => {
            open.value = false;
            confirmLoading.value = false;
        }, 2000);
    };

    const title = props.isLogin ? 'Login' : 'Sign Up';
</script>

<template>
  <div>
    <AButton type="primary" @click="showModal" class="btn">{{title}}</AButton>
    <AModal v-model:open="open" :title="title" :confirm-loading="confirmLoading" @ok="handleOk">
        <AInput class="auth-input" v-if="!isLogin" v-model:value.lazy="value1" autofocus placeholder="Username" />
        <AInput class="auth-input" v-model:value.lazy="value1" autofocus placeholder="Email" />
        <AInputPassword class="auth-input" v-model:value="value" placeholder="Password" />
    </AModal>
  </div>
</template>

<style scoped>
.btn {
    margin-left: 10px;
}

.auth-input {
    margin-top: 5px;
}
</style>