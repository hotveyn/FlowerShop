<template>
  <div class="shop__tools">
    <ShopToolsFiltering/>
    <ShopToolsSearch/>
    <ShopToolsCheep/>
  </div>
</template>

<script setup lang="ts">
import ShopToolsFiltering from "@/components/shop/ShopToolsFiltering.vue";
import ShopToolsSearch from "@/components/shop/ShopToolsSearch.vue";
import ShopToolsCheep from  "@/components/shop/ShopToolsCheep.vue";

</script>

<style scoped lang="scss">
@import "@/mixins.scss";
.shop__tools {
  @include myFlex();
  width: 100%;
  border-radius: 5px;
  padding: 20px 20px;
  background-color: white;

}
</style>