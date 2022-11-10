<template>
  <TheHeader/>
  <div class="page">
    <div class="page-container">
      <slot/>
    </div>
  </div>
  <TheFooter/>
</template>

<script setup lang="ts">
import TheHeader from "@/components/header/TheHeader.vue";
import TheFooter from "@/components/footer/TheFooter.vue"

</script>

<style scoped lang="scss">
.page {
  background-color: rgba(242, 242, 242, 1);
  padding: 70px 0;
  font-family: 'Roboto', sans-serif;
}

.page-container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
}
</style>