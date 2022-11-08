<template>
  <div class="header-container">
    <TheHeader/>
  </div>
  <slot/>
</template>

<script setup lang="ts">
import TheHeader from "@/components/header/TheHeader.vue";

</script>

<style scoped lang="scss">
.header-container{
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

}
</style>