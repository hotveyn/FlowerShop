<template>
  <div class="flowers-items">
    <FlowerItem
        v-for="flower in sortedFlowers"
        :key="flower.id"
        :flower="flower"
    />
  </div>
</template>

<script setup lang="ts">
import FlowerItem from "@/components/FlowerItem.vue";
import {useShopStore} from "@/stores/shop";
import {computed} from "vue";

const shopStore = useShopStore();

const sortedFlowers = computed(() => {
  return shopStore.getFlowersBySort(shopStore.sortMod);
});
</script>

<style scoped lang="scss">
.flowers-items {
  min-height: 500px;
  margin-top: 40px;
  gap: 35px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(1, 1fr);
}
</style>
