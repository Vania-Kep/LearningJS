<script setup>
import { RouterLink, useRouter } from 'vue-router';
import Container from './Container.vue';
import AuthModal from './AuthModal.vue';
import { ref } from 'vue';
const searchUsername = ref('');

const isAuthenticated = ref(false);

const roter = useRouter();
const onSearch = () => {
    if (searchUsername.value) {
        roter.push(`/profile/${searchUsername.value}`);
        searchUsername.value = '';
    }
};
</script>

<template>
    <a-layout class="layout">
        <ALayoutHeader>
            <Container>
                <div class="nav-container">
                    <div class="right-content">
                        <RouterLink :to="'/'">Instagram</RouterLink>
                        <AInputSearch
                            v-model:value="searchUsername"
                            placeholder="username..."
                            style="width: 200px"
                            @search="onSearch"
                        />
                    </div>
                    <div class="left-content" v-if="!isAuthenticated">
                        <AuthModal :isLogin="false"/>
                        <AuthModal :isLogin="true"/>
                    </div>
                    <div class="left-content" v-else>
                        <AButton type="primary">Profile</AButton>
                        <AButton type="primary">Logout</AButton>
                    </div>
                </div>
            </Container>
        </ALayoutHeader>
    </a-layout>
</template>

<style scoped>
.nav-container {
    display: flex;
    justify-content: space-between;
}
.right-content {
    display: flex;
    align-items: center;

    a {
        margin-right: 10px;
    }
}
.left-content {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        margin-left: 10px;
    }
}
</style>
