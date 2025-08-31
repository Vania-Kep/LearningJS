import { createApp, defineAsyncComponent  } from "vue";
import App from "./App.vue";
import "../style.css";
const app = createApp(App);

app.component('AppModal', defineAsyncComponent(() =>
  import('./components/AppModal.vue')
));

app.mount("#app");
