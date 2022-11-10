<template>
    <button
        class="button-add"
        @click="buy()">
      <img
          :class="{'bought': disabled}"
          src="@/icons/cart.svg"
          alt="cart">
      Add to cart
    </button>
</template>
 
<script setup lang="ts">
import {IFlower} from "@/interfaces/IFlower";
import {useFlowersStore} from "@/stores/flowers";
import {useCartStore} from "@/stores/cart";
import {ref} from "vue";

const flowerStore = useFlowersStore();
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

function buy(){
  flowerStore.upFlowerRate(props.flowerToBut);
  cartStore.addNewFlowerInCart(props.flowerToBut);
  warnDisabled();
}
</script>

<style scoped lang="scss">
@import "@/mixins.scss";
.buy {
  @include myFlex();

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
    .bought{
      animation: bought-cart 0.5s both;
    }
  }
}
@keyframes bought-cart {
  0%, 100%{
    transform: scale(1,1) rotate(0) translate(0, 0);
  }
  50%{
    transform: scale(1.1,1.1) rotate(-20deg) translate(0, -8px);
  }
}
</style>