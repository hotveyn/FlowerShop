<template>
  <input
      id="shop-search"
      v-model.trim="shopStore.search"
      class="shop__search"
      type="search"
      name="shop-search"
      placeholder="Search...">
</template>

<script setup lang="ts">
import {useShopStore} from "@/stores/shop";
// import {Ref, ref, watch} from "vue";

const shopStore = useShopStore();


// Fix: строка сбрасывается если выйти из шопа и обратно в него зайти,
// поэтому происходит баг с отображением карточек с цветами
// если связать search напрямую со shopStore то бага не будет
// но связать с полем стора что либо из компонента нельзя(так Саня говорил)


// const searchedText:Ref<string> = ref("");
// watch(searchedText,(newSearchedText)=>{
//   shopStore.search = newSearchedText;
// });
</script>

<style scoped lang="scss">
@import "@/mixins.scss";
.shop__search {
  width: 500px;
  border: 3px solid $myGrey;
  border-radius: 10px;
  padding: 10px 20px;
  box-sizing: border-box;
  font-size: 20px;
  outline: none;
  transition: border-color 0.2s;

  &:hover, &:focus{
    border-color:$myOrange ;
  }

  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration { display: none; }
}
</style>