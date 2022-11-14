<template>
  <div class="cart">
    <h2>Your Cart</h2>
    <div class="cart__flowers">
      <CartFlower
          v-for="flower in flowers"
          :key="flower.id"
          :flower-cart="flower"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import {useCartStore} from "@/stores/cart";
import CartFlower from "@/components/cart/CartFlower.vue";
import {computed} from "vue";

const cartStore = useCartStore();

const flowers = computed(() => {
  return cartStore.flowersInCart;
});
</script>

<style scoped lang="scss">
@import "@/assets/css/mixins.scss";

.cart {
  max-width: 790px;
  width: 100%;
  padding: 45px;
  background-color: white;
  border-radius: 5px;
  box-sizing: border-box;

  h2 {
    font-size: 30px;
    margin-bottom: 40px;
  }

  .cart__flowers {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    gap: 35px;
  }
}

</style>
