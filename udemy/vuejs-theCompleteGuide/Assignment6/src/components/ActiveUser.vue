<script>
// ActiveUser should output a username (h2) and age (h3)
export default {
    props: ['name', 'age']
}
</script>

<template>
    <div>
        <h1>Active User: </h1>
        <h2>{{ name }}</h2>
        <h3>{{ age }}</h3>
    </div>
</template>

<style>
</style>