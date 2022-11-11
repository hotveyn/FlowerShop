<template>
  <button
      class="button-add"
      @click="toCart()">
    <img
        :class="{'bought': disabled}"
        src="@/icons/cart.svg"
        alt="cart">
    Add to cart
  </button>
</template>

<script setup lang="ts">
import {IFlower} from "@/interfaces/IFlower";
// import {useFlowersStore} from "@/stores/flowers";
import {useCartStore} from "@/stores/cart";
import {ref} from "vue";

// const flowerStore = useFlowersStore();
const cartStore = useCartStore();

const props = defineProps<{
  flowerToBut: IFlower;
}>();

const disabled = ref(false);

// Start animation function
function warnDisabled() {
  disabled.value = true;
  setTimeout(() => {
    disabled.value = false;
  }, 300);
}

function toCart() {
  // flowerStore.upFlowerPopularRate(props.flowerToBut);
  cartStore.addNewFlowerInCart(props.flowerToBut);
  warnDisabled();
}
</script>

<style scoped lang="scss">
@import "@/mixins.scss";

.buy__price {
  font-size: 18px;
  color: rgba(131, 131, 131, 1);
}

.button-add {
  cursor: pointer;
  border: 0;
  background-color: white;
  @include myFlex();
  color: $myOrange;
  font-size: 18px;

  img {
    height: 20px;
    margin-right: 5px;
  }

  .bought {
    animation: bought-cart 0.3s linear;
  }
}


@keyframes bought-cart {

  10%, 70% {
    transform: scale(1, 1);
  }
  40% {
    transform: scale(1.3, 1.3);
  }
  90% {
    transform: scale(1.1, 1.1);
  }

}
</style>