<template>
  <button
      :class="{'active':shopStore.cheep}"
      class="cheep-button"
      @click="changeCheep()">
    <img
        src="@/icons/cheep.png"
        alt="cheep">
    Cheep
  </button>
</template>

<script setup lang="ts">
import {useShopStore} from "@/stores/shop";

const shopStore = useShopStore();

// Спросить у Сани нужно ли тут использовать watch вместо обычный функции
function changeCheep():void{
  shopStore.cheep = !shopStore.cheep;
}
</script>

<style scoped lang="scss">
@import "@/mixins.scss";

.cheep-button {
  padding: 10px 15px;
  border: 3px solid white;
  border-radius: 5px;
  background-color: white;
  cursor: pointer;
  @include myFlex();
  font-size: 19px;
  transition: border 0.2s;
  &:hover{

    border: 3px solid $myOrange;
  }
  img {
    margin-right: 5px;
  }
}

.active{
  border: 3px solid $myOrange;
}
</style>
