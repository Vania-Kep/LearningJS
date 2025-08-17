<script>
export default {
    data() {
        return {
            activeUser: null,
            users: []
        }
    },
    methods: {
        createNewUser(name, age) {
            this.users.push({
                id: new Date().toISOString(),
                name: name,
                age: age
            });
        },
        selectUser(id) {
            this.activeUser = this.users.find(u => u.id === id);
        }
    }
}
</script>

<template>
    <section v-if="activeUser && activeUser.name" >
        <active-user :name="activeUser.name" :age="activeUser.age"></active-user>
    </section>
    <section>
        <h2>Add New User</h2>
        <user-data @create-new-user="createNewUser"></user-data>
    </section>

    <section v-if="users.length">
        <h2>All Users:</h2>
        <user-item v-for="user in users" :key="user.id" :user="user" @click="selectUser(user.id)"></user-item>
    </section>
</template>

<style>
section {
    padding: 20px;
    margin: 20px;
    border: 2px solid rgba(100, 122, 0, 0.3);
    border-radius: 20px;
}
</style>