let timer = null;

const app = Vue.createApp({
  data() {
    return {
      number: 0
    };
  },
  computed: {
    result() {
      if (this.number < 37) {
        return 'Not there yet!';
      }
      if (this.number > 37) {
        return 'Too mutch!';
      }

      return 'You reached 37!';
    }
  },
  watch: {
    result() {
      if (timer) return;

      timer = setTimeout(() => {
        this.number = 0;
        timer = null;
      }, 5000);
    }
  }
});

app.mount('#events');
