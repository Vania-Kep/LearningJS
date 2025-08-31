const vueApp = Vue.createApp({
    data() {
        return {
            tasks: [],
            inputValue: '',
            showTasks: true
        };
    },
    computed: {
        buttonCaption() {
            return this.showTasks ? 'Hide List' : 'Show List';
        }
    },
    methods: {
        addTask() {
            console.log('Adding task:', this.inputValue);
            if (this.inputValue.trim() !== '') {
                this.tasks.push(this.inputValue.trim());
                this.inputValue = ''; // Clear the input field after adding the task
            }
        },
        removeTask(idx) {
            this.tasks.splice(idx, 1);
        }
    }
});

vueApp.mount('#assignment');