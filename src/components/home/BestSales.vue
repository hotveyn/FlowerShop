<template>
  <div class="best-flowers">
    <TheFlower
        v-for="i in sortedFlowersByPopular"
        :key="i.id"
        :flower="i"/>
  </div>
</template>

<script setup lang="ts">
import {IFlower} from "@/interfaces/IFlower";
import TheFlower from "@/components/home/TheFlower.vue";
import {useFlowersStore} from "@/stores/flowers";
import {computed} from "vue";

const flowersStore = useFlowersStore();
const flowers = flowersStore.getFlowers();

const sortedFlowersByPopular = computed(()=>{
  let tempFlowers = [...flowers]
  tempFlowers.sort((a,b) => (a.popular < b.popular) ? 1 : ((b.popular < a.popular) ? -1 : 0));
  tempFlowers.length = 4
  return tempFlowers;
});

</script>

<style scoped lang="scss">
.best-flowers{
  gap: 25px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(1, 1fr);
}
</style>