<script setup>
    import Container from './Container.vue';
    import UserBar from './UserBar.vue';
    import ImageGalary from './ImageGalary.vue';
    import { supabase } from '@/superbase';
    import { ref, reactive, onMounted } from 'vue';
    import { useRoute } from 'vue-router';

    const route = useRoute();
    const {username} = route.params;
    const user = ref(null);
    const posts = ref([]);
    const loading = ref(false)
    const userInfo = reactive({
        posts: 0,
        followers: 0,
        following: 0
    });

    const fetchData = async () => {
        loading.value = true;
        const {data: userData} = await supabase
        .from('users')
        .select()
        .eq('username', username)
        .single();

        if (!userData) {
            loading.value = false;
            user.value = null;
            return;
        }

        user.value = userData;

        const {error, data: userPosts} = await supabase
            .from('posts')
            .select()
            .eq('owner_id', user.value.id)
            .order('id', {ascending: false});

        if (error) {
            loading.value = false;
            return;
        }

        posts.value = userPosts;
        userInfo.posts = posts.value.length;
        loading.value = false;
        fetchFollowersFollowingData();
    };

    const fetchFollowersFollowingData = async () => {
        const {count: countFollowings} = await supabase
            .from('followers_following')
            .select('*', {count: 'exact'})
            .eq('follower_id', user.value.id)
            .order('created_at', {ascending: false});

        userInfo.following = countFollowings;

        const {count: countFollowers} = await supabase
            .from('followers_following')
            .select('*', {count: 'exact'})
            .eq('following_id', user.value.id)
            .order('created_at', {ascending: false});

        userInfo.followers = countFollowers;

    }

    onMounted(async () => {
        fetchData();
    });

    const addNewPost = post => {
        posts.value.unshift(post);
    };

    const followUnfollow = (folow) => {
        if (folow) {
            userInfo.followers++;
        } else {
            userInfo.followers--;
        }
    }

    const hanldePostDeletion = (deletedPostId) => {
        posts.value = posts.value.filter((post) => {
            return post.id != deletedPostId;
        });
        userInfo.posts = posts.value.length;
    }
</script>

<template>
        <div class="profile-container" v-if="!loading">
            <Container>
                <UserBar
                    :key="$route.params.username"
                    :user="user"
                    :userInfo="userInfo"
                    :addNewPost="addNewPost"
                    :followUnfollow="followUnfollow"
                />
            <ImageGalary :posts="posts" :hanldePostDeletion="hanldePostDeletion"/>
            </Container>
        </div>
        <div class="profile-container spinner" v-else>
            <ASpin size="large"/>
        </div>
</template>

<style scoped>
.profile-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0px;
    padding-inline: 50px;

    &.spinner {
        margin: 60px 0;
        height: 100px;
    }
}
</style>