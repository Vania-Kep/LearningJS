const vueApp = Vue.createApp({
    data() {
        return {
            userInput: 'start',
            submitedInput: ''
        };
    },
    methods: {
        showAllert() {
            window.alert('This is an alert message!');
        }
    }
});

vueApp.mount('#assignment');