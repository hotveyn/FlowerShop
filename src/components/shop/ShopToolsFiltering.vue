<template>
  <button class="shop__filter shop__button">
    <img
        src="@/icons/filter.png"
        alt="filter">
    Filtering
  </button>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
@import "@/mixins.scss";

.shop__button {
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
</style>