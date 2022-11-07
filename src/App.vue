<template>
  <div v-for="i in aboba">
    <p>123123</p>
  </div>
</template>

<script setup lang="ts">
const aboba = 3;
</script>

<style scoped lang="scss">
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;

  &:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  &.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
}
</style>
