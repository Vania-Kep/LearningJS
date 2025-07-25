<script setup>
    import { ref, defineProps, reactive } from 'vue';
    import { useUserStore } from '@/stores/users';

    const userStore = useUserStore();
    const props = defineProps(['isLogin']);

    const userCredentials = reactive({
      email: '',
      password: '',
      username: ''
    });

    const open = ref(false);
    const confirmLoading = ref(false);

    const clearUserCredentialInputs = () => {
        userCredentials.email = '';
        userCredentials.password = '';
        userCredentials.username = '';
        userStore.clearErrorMessage();
    };

    const showModal = () => {
        open.value = true;
    };
    const handleOk = async() => {
        confirmLoading.value = true;
        if (props.isLogin) {
            await userStore.handleLogin({
                email: userCredentials.email,
                password: userCredentials.password
            });
        } else {
            await userStore.handleSignup(userCredentials);
        }

        confirmLoading.value = false;
        console.log('userStore.user', userStore.user);

        if (userStore.errorMessage || !userStore.user) {
            return;
        }

        open.value = false;
        clearUserCredentialInputs();
    };

    const handleCancel = () => {
        open.value = false;
        clearUserCredentialInputs();
    }

    const title = props.isLogin ? 'Login' : 'Sign Up';
</script>

<template>
  <div>{{ userStore.user }}
    <AButton type="primary" @click="showModal" class="btn">{{title}}</AButton>
    <AModal v-model:open="open" :title="title">
        <div v-if="!confirmLoading" class="input-container">
            <AInput class="auth-input" v-if="!isLogin" v-model:value="userCredentials.username" autofocus placeholder="Username" />
            <AInput class="auth-input" v-model:value="userCredentials.email" autofocus placeholder="Email" />
            <AInputPassword class="auth-input" v-model:value="userCredentials.password" placeholder="Password" />
        </div>
        <div v-else class="spinner">
            <ASpin />
        </div>
        <ATypographyText v-if="userStore.errorMessage" type="danger">{{ userStore.errorMessage }}</ATypographyText>

        <template #footer>
            <AButton key="back" @click="handleCancel">Cancel</AButton>
            <AButton key="submit" type="primary" :loading="confirmLoading" @click="handleOk" :disabled="confirmLoading">Submit</AButton>
        </template>
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

.input-container {
    height: 120px;
}
.spinner {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 120px;
}
</style>