<template>
  <button
      class="button-favorite"
      :class="{'favorite': isFavorite}"
      @click="makeFavorite()">
    <img
        src="@/icons/like.svg"
        alt="like">
    Add to favorite
  </button>
</template>

<script setup lang="ts">
import {IFlower} from "@/interfaces/IFlower";
import {useFlowersStore} from "@/stores/flowers";
import {ref} from "vue";

const flowerStore = useFlowersStore();

const props = defineProps<{
  flowerToBut: IFlower;
}>();

const isFavorite = ref(false);

function makeFavorite() {
  flowerStore.flowerToFavorite(props.flowerToBut);
  isFavorite.value = !isFavorite.value;
}
</script>

<style scoped lang="scss">
@import "@/mixins.scss";

.button-favorite {
  @include myFlex($jc: center);
  cursor: pointer;
  gap: 5px;
  background-color: white;
  padding: 7px 10px;
  border:2px solid white;
  border-radius: 5px;
  transition: border 0.2s;
  font-size: 18px;
}
.favorite{
  border-radius: 5px;
  border:2px solid $myOrange;
}
</style>