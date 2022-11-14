<template>
  <div class="cart__flower flower">
    <div class="flower__img-wrapper">
      <img
          class="flower__img"
          :src="`src/assets/img/flowers/${flowerCart.img}`"
          alt="flower"
      >
    </div>
    <div class="flower__info">
      <div class="flower__title-info">
        <h3>{{ flowerCart.name }}</h3>
        <button
            class="flower__delete"
            @click="deleteFlower()"
        >
          <img
              src="src/assets/icons/delete.svg"
              alt="delete"
          >
        </button>
      </div>
      <div class="flower__prices">
        <p class="flower__unit-price">
          unit price {{ flowerCart.price }}$
        </p>
        <div>
          <CartFlowerCounter :flower-cart="flowerCart"/>
          <p class="flower__total-uniq-price">
            Total {{ flowerTotalPrice }}$
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CartFlowerCounter from "@/components/cart/CartFlowerCounter.vue";
import {IFlowerCart} from "@/interfaces/IFlowerCart";
import {useCartStore} from "@/stores/cart";

const cartStore = useCartStore();

const props = defineProps<{
  flowerCart: IFlowerCart;
}>();


function deleteFlower() {
  cartStore.removeFlower(props.flowerCart);
}

const flowerTotalPrice = cartStore.getUniqFlowerTotalPrice(props.flowerCart);
</script>

<style scoped lang="scss">
@import "@/assets/css/mixins.scss";

.cart__flower {
  @include myFlex();
  gap: 20px;

  .flower__img-wrapper {
    width: 200px;
    height: 200px;
    border-radius: 5px;
    overflow: hidden;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  .flower__info {
    @include myFlex($fd: column, $ai: start);
    max-width: 470px;
    width: 100%;
    max-height: 166px;
    height: 100%;

    .flower__title-info {
      @include myFlex();
      width: 100%;

      h3 {
        font-size: 28px;
      }

      .flower__delete {
        background-color: white;
        transform: scale(1.2, 1.2);
        border: 0;
        cursor: pointer;
      }
    }

    .flower__prices {
      @include myFlex($ai: start, $fd: column);
      gap: 10px;
      width: 100%;

      .flower__unit-price {
        font-size: 18px;
        color: rgba(131, 131, 131, 1);
      }

      > div {
        @include myFlex();
        width: 100%;

        .flower__total-uniq-price {
          font-size: 20px;
        }
      }
    }
  }
}
</style>
