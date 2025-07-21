<script setup>
    import Container from './Container.vue';
    import UserBar from './UserBar.vue';
    import ImageGalary from './ImageGalary.vue';

    const posts = [{
        id: 1,
        username: 'selina',
        name: 'Selina Gomez',
        imgUrl: 'https://img.buzzfeed.com/buzzfeed-static/static/2023-09/24/13/asset/b0bd2f4bf746/sub-buzz-4715-1695563853-1.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto',
        caption: ''
    }, {
        id: 2,
        username: 'default',
        name: 'Default',
        imgUrl: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
        caption: 'This is a defaultcaption!'
    }];

</script>

<template>
    <Container>
        <div class="profile-container">
          <UserBar
            :username="'asd'"
            :userInfo="{
                posts: 4,
                followers: 12,
                following: 323
            }"
          />
          <ImageGalary :posts="posts"/>
        </div>
    </Container>
</template>

<style scoped>
.profile-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0px;
}
</style>