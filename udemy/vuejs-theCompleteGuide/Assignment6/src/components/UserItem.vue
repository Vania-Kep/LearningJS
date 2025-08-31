<script>
export default {
    props: ['user']
}
</script>

<template>
    <div class="users-list-item">
        <div>
            <strong>Name: </strong>
            {{ user.name }}
        </div>
        <div>
            <strong>Age:</strong>
            {{ user.age }}
        </div>
    </div>
</template>

<style>
.users-list-item {
    display: block;
    border: 2px solid whitesmoke;
    border-radius: 15px;
}
</style>