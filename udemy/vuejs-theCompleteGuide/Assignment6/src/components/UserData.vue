<script>
export default {
    emits: ['create-new-user'],
    data() {
        return {
            name: '',
            age: ''
        }
    },
    methods: {
        submitNewUser() {
            if (this.name == '' || this.age == '') {
                alert('Data should not be empty');

                return;
            }

            this.$emit('create-new-user', this.name, this.age);

            this.name = '';
            this.age = '';
        }
    }
}
</script>

<template>
    <form @submit.prevent="submitNewUser">
        <div>
            <label for="name">Name:</label>
            <input type="text" v-model="name" name="name">
        </div>
        <div>
            <label for="age">Age:</label>
            <input type="text" v-model="age" name="age">
        </div>
        <div>
            <button >Add New User</button>
        </div>
    </form>
</template>

<style>
div {
    margin: 10px;
}
label {
    width: 150px;
}
</style>