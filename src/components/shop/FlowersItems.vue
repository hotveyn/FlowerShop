<template>
  <div class="flowers-items">
    <TheFlower
        v-for="i in flowersStore.getFlowers()"
        :key="i.id"
        :flower="i"/>
  </div>
</template>

<script setup lang="ts">
import TheFlower from "@/components/TheFlower.vue";
import {useFlowersStore} from "@/stores/flowers";

const flowersStore = useFlowersStore();
</script>

<style scoped lang="scss">
.flowers-items {
  margin-top: 40px;
  gap: 35px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(1, 1fr);
}
</style>