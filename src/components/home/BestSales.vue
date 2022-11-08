<template>
  <div class="best-flowers">
    <TheFlower
        v-for="i in flowers"
        :key="i.id"
        :flower="i"/>
  </div>
</template>

<script setup lang="ts">
import TheFlower from "@/components/home/TheFlower.vue";
import {useFlowersStore} from "@/stores/flowers";

const flowersStore = useFlowersStore();
const flowers = flowersStore.getFlowers();
</script>

<style scoped lang="scss">
.best-flowers{
  gap: 25px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(1, 1fr);
}
</style>