<template>
  <div
      v-if="favoriteFlowers.length"
      class="fav-flowers">
    <div class="feed-item__title">
      <hr>
      <h3>Favorite flowers</h3>
      <hr>
    </div>
    <div class="fav-flowers__grid">
      <FlowerItem
          v-for="flower in favoriteFlowers"
          :key="flower.id"
          :flower="flower"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import FlowerItem from "@/components/FlowerItem.vue";
import {useFlowersStore} from "@/stores/flowers";
import {computed} from "vue";

const flowersStore = useFlowersStore();

const favoriteFlowers = computed(() => {
  return flowersStore.getFavorites;
});

</script>

<style scoped lang="scss">
@import "@/mixins.scss";


.fav-flowers {
  margin: 50px auto 0;

  .fav-flowers__grid {
    margin: 50px auto 0;
    width: 80%;
    gap: 15px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(1, 1fr);
  }
}

.feed-item__title {
  @include myFlex($jc: center);
  margin-bottom: 33px;

  h3 {
    font-size: 32px;
  }

  hr {
    width: 280px;
    background-color: #D9D9D9;
  }
}
</style>
