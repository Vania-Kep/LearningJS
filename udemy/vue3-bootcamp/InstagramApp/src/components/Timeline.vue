<script setup>
    import Container from './Container.vue';
    import Cards from './Cards.vue';
    import { useUserStore } from '@/stores/users';
    import { storeToRefs } from 'pinia';

    const userStore = useUserStore();
    const { user: loggedInUser, loadingUser } = storeToRefs(userStore);

</script>

<template>
    <Container>
        <div v-if="!loadingUser">
            <Cards v-if="loggedInUser" />

            <div class="timeline-container" v-else>
                <h2>Log it to see posts</h2>
            </div>
        </div>
        <div v-else class="timeline-spinner">
            <ASpin size="large"/>
        </div>
    </Container>
</template>

<style scoped>
.timeline-spinner {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px 0px;
}
</style>