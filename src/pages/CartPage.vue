<template>
  <div class="cart-container">
    <div
        v-if="cartStore.getLength"
        class="cart-full"
    >
      <CartFlowers/>
      <CartBuy/>
    </div>
    <div
        v-else
        class="cart-empty"
    >
      <img
          src="@/assets/img/cartEmpty.png"
          alt="cart empty"
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import {useCartStore} from "@/stores/cart";
import CartFlowers from "@/components/cart/CartFlowers.vue";
import CartBuy from "@/components/cart/CartBuy.vue";


const cartStore = useCartStore();


</script>

<style scoped lang="scss">
@import "@/assets/css/mixins.scss";

.cart-container {
  max-width: 1200px;
  width: 100%;
  min-height: 500px;
}

.cart-empty {
  @include myFlex($jc: center);
  background-color: white;
  height: 561px;
  border-radius: 5px;
  gap: 30px;
}

.cart-full {
  @include myFlex($ai: start);

}
</style>
