<template>
  <div class="flower">
    <img
        :src="'src/img/' + props.flower.img"
        :alt="props.flower.name">
    <p class="flower__name">{{ props.flower.name }}</p>
    <div class="buy">
      <p class="buy__price">{{ props.flower.price }}$</p>
      <button class="buy__add">
        <img src="@/icons/cart.svg" alt="cart">
        Add to cart
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {IFlower} from '@/interfaces/IFlower';
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
  >img{
    margin-bottom: 9px;
  }
  .flower__name{
    font-size: 26px;
    margin-bottom: 35px;
  }
  .buy{
    @include myFlex();
    .buy__price{
      font-size: 18px;
      color: rgba(131, 131, 131, 1);
    }
    .buy__add{
      cursor: pointer;
      border: 0;
      background-color: white;
      @include myFlex();
      color: $myOrange;
      font-size: 18px;
      img{
        height: 20px;
        margin-right: 5px;
      }
    }
  }
}
</style>