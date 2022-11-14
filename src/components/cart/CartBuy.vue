<template>
  <div class="buy">
    <p class="subtotal">
      Subtotal for {{ cartLength }} items:
      <span class="total">
        {{ totalPrice }}$
      </span>
    </p>
    <button @click="buy">
      Checkout
    </button>
  </div>
</template>

<script setup lang="ts">
import {useCartStore} from "@/stores/cart";
import {computed} from "vue";
import {useRouter} from "vue-router";

const cartStore = useCartStore();
const router = useRouter();

const cartLength = computed(() => {
  return cartStore.getLength;
});
const totalPrice = computed(() => {
  return cartStore.getTotalPrice;
});

function buy() {
  cartStore.buy();
  router.push("/");
}
</script>

<style scoped lang="scss">
@import "@/assets/css/mixins.scss";


.buy {
  max-width: 350px;
  width: 100%;
  padding: 33px 20px 20px 20px;
  background-color: white;
  border-radius: 5px;

  button {
    margin-top: 20px;
    width: 100%;
    border: 2px solid $myOrange;
    background-color: white;
    border-radius: 5px;
    padding: 10px 20px;
    color: $myOrange;
    font-size: 22px;
    cursor: pointer;
    transition: color 0.2s, background-color 0.2s;

    &:hover {
      background-color: $myOrange;
      color: white;
    }
  }

  .subtotal {
    font-size: 24px;

    .total {
      font-weight: 700;
    }
  }
}
</style>
