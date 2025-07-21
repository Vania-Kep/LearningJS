<script setup>
    import Container from './Container.vue';
    import Card from './Card.vue';

    const data = [{
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
    }, {
        id: 3,
        username: 'ashevchenko',
        name: 'Andrii Shevchenko official',
        imgUrl: 'https://i.ebayimg.com/images/g/nZAAAOSwxuJeX5By/s-l1200.jpg',
        caption: 'My last game...'
    }, {
        id: 4,
        username: 'selina',
        name: 'Selina Gomez',
        imgUrl: 'https://img.businessoffashion.com/resizer/v2/JVVIMJAZVBGZ3AJZVFIDZPIZ6I.jpg?auth=744bcecfe70916df14883caa96e10a99b9cc18751a9c5ab138678842b90de36c&width=1440',
        caption: 'My morning makeup'
    }, {
        id: 5,
        username: 'usyk',
        name: 'Usyk',
        imgUrl: 'https://www.sportphotogallery.com/content/images/cmsfiles/product/46470/47532-zoom.jpg',
        caption: 'And still!'
    }, {
        id: 6,
        username: 'usyk',
        name: 'Usyk',
        imgUrl: 'https://e0.365dm.com/25/07/1600x900/skysports-oleksandr-usyk-daniel-dubois_6969011.jpg?20250720073640',
        caption: ''
    }];

</script>

<template>
    <Container>
        <div class="card-container">
            <Card v-for="post in data" :key="post.id" :post="post" />
            <Card />
            <Card />
        </div>
    </Container>
</template>

<style scoped>
.card-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0px;
}
</style>