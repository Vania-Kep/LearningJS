import { createStore } from 'vuex';

import cartStore from './cart.js';
import productsCatalogStore from './productsCatalog.js';

const store = createStore({
    modules: {
        cart: cartStore,
        productsCatalog: productsCatalogStore
    },
    state() {
        return {
            isLoggedIn: false
        };
    },
    mutations: {},
    actions: {
        login(context) {
            context.state.isLoggedIn = true;
        },
        logout(context) {
            context.state.isLoggedIn = false;
        }
    },
    getters: {
        isLoggedIn (state) {
            return state.isLoggedIn;
        }
    }
});

export default store;