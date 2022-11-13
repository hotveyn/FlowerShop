<template>
  <div class="shop">
    <ShopTools/>
    <FlowersItems/>
  </div>
</template>

<script setup lang="ts">
import ShopTools from "@/components/shop/ShopTools.vue";
import FlowersItems from "@/components/shop/FlowersItems.vue";
</script>

<style scoped lang="scss">
@import "@/mixins.scss";

.shop {
  @include myFlex($fd: column);
  font-family: Roboto, sans-serif;

}
</style>
