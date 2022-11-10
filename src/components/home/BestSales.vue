<template>
  <div class="best-flowers">
    <TheFlower
        v-for="i in sortedFlowersByPopular"
        :key="i.id"
        :flower="i"/>
  </div>
</template>

<script setup lang="ts">
import TheFlower from "@/components/TheFlower.vue";
import {useFlowersStore} from "@/stores/flowers";
import {computed} from "vue";

const flowersStore = useFlowersStore();


let sortedFlowersByPopular = computed(()=>{
  const sortedFlowers = [...flowersStore.getSortedFlowers("Popular")];
  sortedFlowers.length = 4;
  return sortedFlowers;
})

</script>

<style scoped lang="scss">
.best-flowers {
  gap: 25px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(1, 1fr);
}
</style>