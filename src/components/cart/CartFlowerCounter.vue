<template>
  <div class="counter">
    <button
        class="counter__minus"
        @click="cartStore.changeFlowerCount(props.flowerCart, 'decrement')"
    >
      <img
          src="/icons/minus.svg"
          alt="minus"
      >
    </button>
    <p class="counter__value">
      {{ flowerCart.count }}
    </p>
    <button
        class="counter__plus"
        @click="cartStore.changeFlowerCount(props.flowerCart, 'increment')"
    >
      <img
          src="/icons/plus.svg"
          alt="minus"
      >
    </button>
  </div>
</template>

<script setup lang="ts">
import {IFlowerCart} from "@/interfaces/IFlowerCart";
import {useCartStore} from "@/stores/cart";

const props = defineProps<{
  flowerCart: IFlowerCart;
}>();

const cartStore = useCartStore();


</script>

<style scoped lang="scss">
@import "@/assets/css/mixins.scss";

.counter {
  width: 70px;
  height: 30px;
  border: 2px solid $myOrange;
  border-radius: 5px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  overflow: hidden;

  button {
    @include myFlex($jc: center);
    background-color: white;
    border: none;
    color: $myOrange;
    cursor: pointer;
  }

  p {
    @include myFlex($jc: center);
    text-align: center;
    font-size: 18px;
  }

}
</style>
