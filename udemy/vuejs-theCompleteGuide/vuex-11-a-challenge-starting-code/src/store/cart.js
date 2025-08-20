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
        }
    },
    mutatuins: {},
    actions: {
        addProductToCart(context, productData) {
            const productInCartIndex = context.state.items.findIndex(
                (ci) => ci.productId === productData.id
            );

            if (productInCartIndex >= 0) {
                context.state.items[productInCartIndex].qty++;
            } else {
                const newItem = {
                    productId: productData.id,
                    title: productData.title,
                    image: productData.image,
                    price: productData.price,
                    qty: 1,
                };
                context.state.items.push(newItem);
            }
            context.state.qty++;
            context.state.total += productData.price;
        },
        removeProductFromCart(context, prodId) {
            const productInCartIndex = context.state.items.findIndex(
                (cartItem) => cartItem.productId === prodId
            );
            const prodData = context.state.items[productInCartIndex];
            context.state.items.splice(productInCartIndex, 1);
            context.state.qty -= prodData.qty;
            context.state.total -= prodData.price * prodData.qty;
        }
    }
}