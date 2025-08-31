<template>
  <section>
    <h2>Your Cart</h2>
    <h3>Total Amount: <base-badge mode="elegant">${{ cartTotal }}</base-badge></h3>
    <TransitionGroup tag="ul" name="cart-item">
        <cart-item
          v-for="item in cart.items"
          :key="item.productId"
          :prod-id="item.productId"
          :title="item.title"
          :image="item.image"
          :price="item.price"
          :qty="item.qty"
        ></cart-item>
    </TransitionGroup>
  </section>
</template>

<script>
import CartItem from '../components/cart/CartItem.vue';

export default {
  components: {
    CartItem,
  },
  computed: {
    cartTotal() {
      return this.$store.getters.totalDisplayValue;
    },
    cart() {
      return this.$store.getters.cartModel
    }
  }
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
}

h2 {
  color: #292929;
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 1rem;
}

h3 {
 text-align: center;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.cart-item-leave-from {
  opacity: 1;
  transform: translateX(0);
}
.cart-item-move,
.cart-item-leave-active {
  transition: all 4s ease;
}
.cart-item-leave-to {
  opacity: 0;
  transform: translateX(300px);
}


.cart-item-leave-active {
  position: absolute;
}
</style>