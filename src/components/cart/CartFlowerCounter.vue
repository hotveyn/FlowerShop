<template>
  <div class="counter">
    <button
        class="counter__minus"
        @click="changeValue(-1)">
      <img
          src="@/assets/icons/minus.svg"
          alt="minus">
    </button>
    <p class="counter__value">
      {{ flowerCart[1] }}
    </p>
    <button
        class="counter__plus"
        @click="changeValue(1)">
      <img
          src="@/assets/icons/plus.svg"
          alt="minus">
    </button>
  </div>
</template>

<script setup lang="ts">
import {IFlower} from "@/interfaces/IFlower";
import {useCartStore} from "@/stores/cart";

const props = defineProps<{
  flowerCart: [IFlower, number];
}>();

const cartStore = useCartStore();

function changeValue(mod: 1 | -1): void {
  cartStore.changeFlowerCount(props.flowerCart[0], mod);
}

</script>

<style scoped lang="scss">
@import "@/mixins.scss";

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
