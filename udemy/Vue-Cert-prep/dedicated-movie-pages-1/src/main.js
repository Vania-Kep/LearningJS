import { createApp } from "vue";
import { createRouter, createWebHistory} from 'vue-router';
import HomePage from './pages/HomePage.vue'
import MovieDetailPage from './pages/MovieDetailPage.vue'
import App from "./App.vue";
import "../style.css";

// import and setup Vue Router here
// 💡 HINT: You'll also need to import your page components

const router = createRouter({
    routes: [{
        path: '/',
        component: HomePage
    },
    {
        path: '/:id',
        component: MovieDetailPage
    }],
    history: createWebHistory()
});

const app = createApp(App)

app.use(router);

app.mount("#app");
