<script setup>
    import Card from './Card.vue';
    import Observer from './Observer.vue';
    import { useUserStore } from '@/stores/users';
    import { storeToRefs } from 'pinia';
    import { ref, onMounted } from 'vue';
    import { supabase } from '@/superbase';

    const userStore = useUserStore();
    const { user: loggedInUser } = storeToRefs(userStore);

    onMounted(async () => {
        await loadTimeline();
    });

    let step = 2;
    const lastCardIndex = ref(2);
    const timelinePosts = ref([]);
    const owners_IDs = ref([]);
    const reachedEnd = ref(false);
    const loadTimeline = async () => {
        const {data: followings} = await supabase
            .from('followers_following')
            .select('following_id')
            .eq('follower_id', loggedInUser.value.id);

        owners_IDs.value = followings.map(f => f.following_id);
        owners_IDs.value.push(loggedInUser.value.id);

        const response = await supabase
            .from('posts')
            .select()
            .in('owner_id', owners_IDs.value)
            .range(0, lastCardIndex.value)
            .order('created_at', {ascending: false});

        if (response.data) {
            timelinePosts.value = response.data;
        }
    };

    const fetchNextSet = async () => {
        if (reachedEnd.value) {
            return;
        }

        const response = await supabase
            .from('posts')
            .select()
            .in('owner_id', owners_IDs.value)
            .range(lastCardIndex.value + 1, lastCardIndex.value + step)
            .order('created_at', {ascending: false});

        timelinePosts.value = [
            ...timelinePosts.value,
            ...response.data
        ];

        lastCardIndex.value = lastCardIndex.value + step;

        if (!response.data.length) {
            reachedEnd.value = true;
        }

    }
</script>

<template>
    <div class="timeline-container">
        <Card v-for="post in timelinePosts" :key="post.id" :post="post" />
        <Observer v-if="timelinePosts.length" @intersect="fetchNextSet"/>
    </div>
</template>

<style scoped>
.timeline-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0px;
}
</style>