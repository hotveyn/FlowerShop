<template>
  <div class="shop__tools">
    <ShopToolsSorting/>
    <ShopToolsSearch/>
    <ShopToolsRevers/>
  </div>
</template>

<script setup lang="ts">
import ShopToolsSorting from "@/components/shop/ShopToolsSorting.vue";
import ShopToolsSearch from "@/components/shop/ShopToolsSearch.vue";
import ShopToolsRevers from "@/components/shop/ShopToolsRevers.vue";

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
