<script setup>
    import { ref, defineProps, onMounted } from 'vue';
    import { useUserStore } from '@/stores/users';
    import { storeToRefs } from 'pinia';
    import UploadPhotoModal from './UploadPhotoModal.vue';
    import { useRoute } from 'vue-router';
    import { supabase } from '@/superbase';

    const userStore = useUserStore();
    const {user: loggedInUser} = storeToRefs(userStore);
    const rote = useRoute();
    const {username: profileUsername} = rote.params;
    const props = defineProps(['user', 'userInfo', 'addNewPost', 'followUnfollow']);
    const isFollowing = ref(false);
    const followingStateLoader = ref(true);

    onMounted(async () => {
        await loadIsFollowingState();
    });

    const loadIsFollowingState = async () => {
        if (!loggedInUser || !loggedInUser.value || !props.user || loggedInUser.value.id === props.user.id) return;

        followingStateLoader.value = true;

        const response = await supabase.from('followers_following')
            .select()
            .eq('follower_id', loggedInUser.value.id)
            .eq('following_id', props.user.id)
            .single();

        isFollowing.value = !!response.data;
        followingStateLoader.value = false;
    };

    const followUser = async (toFollow) => {
        followingStateLoader.value = true;
        let error;

        if (!isFollowing.value) {
            const response = await supabase.from('followers_following').insert({
                follower_id: loggedInUser.value.id,
                following_id: props.user.id
            });

            error = response.error;
            isFollowing.value = true;
        } else {
            const response = await supabase.from('followers_following')
                .delete()
                .eq('follower_id', loggedInUser.value.id)
                .eq('following_id', props.user.id);

            error = response.error;
            isFollowing.value = false;
        }

        if (error) {
            alert('Something went wrong. Please try again.');
            loadIsFollowingState();

            return;
        }

        props.followUnfollow(isFollowing.value);
        followingStateLoader.value = false;

    }
</script>

<template>
    <div class="userbar-container" v-if="props.user">
        <div class="top-content">
            <ATypographyTitle :level="2">{{props.user.username}}</ATypographyTitle>
            <div v-if="loggedInUser">
                <UploadPhotoModal
                    v-if="loggedInUser.username === profileUsername"
                    :addNewPost="addNewPost"
                />
                <div v-else>
                    <AButton @click="followUser(true)" v-if="!isFollowing" :loading="followingStateLoader">Follow</AButton>
                    <AButton @click="followUser(false)" v-else type="dashed" :loading="followingStateLoader">Unfollow</AButton>
                </div>
            </div>
        </div>
        <div class="bottom-content">
            <ATypographyTitle :level="5">{{props.userInfo.posts}} posts</ATypographyTitle>
            <ATypographyTitle :level="5">{{props.userInfo.followers}} followers</ATypographyTitle>
            <ATypographyTitle :level="5">{{props.userInfo.following}} following</ATypographyTitle>
        </div>
    </div>
    <div v-else  class="userbar-container">
        <div class="top-content">
            <ATypographyTitle :level="2">User Not Found</ATypographyTitle>
        </div>
    </div>
</template>

<style scoped>
.userbar-container {
    padding-bottom: 75px;
    width: 100%;
}

.top-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.bottom-content {
    display: flex;
    align-items: center;

    h5 {
        margin:0;
        padding: 0;
        margin-right: 30px;
    }
}
</style>