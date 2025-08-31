export default {
    state() {
        return {
            items: [],
            total: 0,
            qty: 0
        };
    },
    getters: {
        cartModel(state) {
            return {
                items: state.items,
                total: state.total,
                qty: state.qty
            };
        },
        totalDisplayValue(state) {
            return state.total.toFixed(2)
        },
        getItemTotal: (state) => (pid) => {
            const item = state.items.find(itm => itm.productId === pid);

            return (item ? item.qty * item.price : 0).toFixed(2)
        }
    },
    mutations: {
        addProductToCart(state, payload) {
            const productData = payload.productData;
            const productInCartIndex = state.items.findIndex(
                (ci) => ci.productId === productData.id
            );

            if (productInCartIndex >= 0) {
                state.items[productInCartIndex].qty++;
            } else {
                const newItem = {
                    productId: productData.id,
                    title: productData.title,
                    image: productData.image,
                    price: productData.price,
                    qty: 1,
                };
                state.items.push(newItem);
            }
            state.qty++;
            state.total += productData.price;
        },
        removeProductFromCart(state, payload) {
            const productId = payload.productId;
            const productInCartIndex = state.items.findIndex(
                (cartItem) => cartItem.productId === productId
            );
            const prodData = state.items[productInCartIndex];
            state.items.splice(productInCartIndex, 1);
            state.qty -= prodData.qty;
            state.total -= prodData.price * prodData.qty;
        }
    },
    actions: {
        addProductToCart(context, payload) {
            const products = context.rootGetters['productsCatalog/products'];
            const productData = products.find(itm => itm.id === payload.productId)

            context.commit('addProductToCart', {productData: productData});
        },
        removeProductFromCart(context, payload) {
            context.commit('removeProductFromCart', payload);
        }
    }
}