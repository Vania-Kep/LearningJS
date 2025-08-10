const app = Vue.createApp({
  data() {
    return {
      name: 'John Doe',
      age: 30,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFceCLQauLjWFaRtOpkDiokBqRILux6q0Kfw&s'
    };
  },
  methods: {
    rundomFavoriteNumber() {
      return Math.floor(Math.random() * 100) + 1;
    },
    myAgeIn5Years() {
      return this.age + 5;
    }
  }
});

app.mount('#assignment');
