<template>
  <div class="flower">
    <div class="img-wrapper">
      <!-- Фикс бага с отображение. Критичность: 3 -->
      <img
          :src="`src/img/flowers/${props.flower.img}`"
          :alt="props.flower.name">
    </div>
    <p class="flower__name">
      {{ props.flower.name }}
    </p>
    <div class="buy">
      <p class="buy__price">
        {{ props.flower.price }}$
      </p>
      <button class="buy__add">
        <img
            src="@/icons/cart.svg"
            alt="cart">
        Add to cart
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {IFlower} from "@/interfaces/IFlower";

const props = defineProps<{
  flower: IFlower;
}>();


</script>

<style scoped lang="scss">
@import "@/mixins.scss";

.flower {
  background-color: white;
  padding: 17px;
  border-radius: 5px;

  .img-wrapper {
    height: 230px;
    width: 250px;
    margin-bottom: 9px;
    border-radius: 5px;
    overflow: hidden;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  .flower__name {
    font-size: 26px;
    margin-bottom: 35px;
  }

  .buy {
    @include myFlex();

    .buy__price {
      font-size: 18px;
      color: rgba(131, 131, 131, 1);
    }

    .buy__add {
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
    }
  }
}
</style>