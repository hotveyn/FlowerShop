<template>
  <input
      id="shop-search"
      v-model.trim="shopStore.search"
      class="shop__search"
      type="search"
      name="shop-search"
      placeholder="Search..."
  >
</template>

<script setup lang="ts">
import {useShopStore} from "@/stores/shop";
// import {Ref, ref, watch} from "vue";

const shopStore = useShopStore();


</script>

<style scoped lang="scss">
@import "@/assets/css/mixins.scss";

.shop__search {
  width: 500px;
  border: 3px solid $myGrey;
  border-radius: 10px;
  padding: 10px 20px;
  box-sizing: border-box;
  font-size: 20px;
  outline: none;
  transition: border-color 0.2s;

  &:hover, &:focus {
    border-color: $myOrange;
  }

  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    display: none;
  }
}
</style>
