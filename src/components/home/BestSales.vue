<template>
  <div class="best-flowers">
    <FlowerItem
        v-for="i in sortedFlowersByPopular"
        :key="i.id"
        :flower="i"
    />
  </div>
</template>

<script setup lang="ts">
import FlowerItem from "@/components/FlowerItem.vue";
import {useShopStore} from "@/stores/shop";
import {computed} from "vue";

const shopStore = useShopStore();


const sortedFlowersByPopular = computed(() => {
  const sortedFlowers = [...shopStore.getFlowersBySort("Popular")];
  sortedFlowers.length = 4;
  return sortedFlowers;
});

</script>

<style scoped lang="scss">
.best-flowers {
  gap: 25px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(1, 1fr);
}
</style>
