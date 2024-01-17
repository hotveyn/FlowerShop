<template>
  <button
      class="button-favorite"
      :class="{'favorite': flower.favorite}"
      @click="makeFavorite()"
  >
    <img
        src="/icons/like.svg"
        alt="like"
    >
    Add to favorite
  </button>
</template>

<script setup lang="ts">
import {IFlower} from "@/interfaces/IFlower";
import {useFlowersStore} from "@/stores/flowers";
import {useUsersStore} from "@/stores/users";
import {useRouter} from "vue-router";

const usersStore = useUsersStore();
const flowerStore = useFlowersStore();
const router = useRouter();

const props = defineProps<{
  flower: IFlower;
}>();

function makeFavorite(): void {
  if (usersStore.authorizedUser) {
    flowerStore.makeFavorite(props.flower);
  } else {
    router.push("/login");
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/css/mixins.scss";

.button-favorite {
  @include myFlex($jc: center);
  cursor: pointer;
  gap: 5px;
  background-color: white;
  padding: 7px 10px;
  border: 2px solid white;
  border-radius: 5px;
  transition: border 0.2s;
  font-size: 18px;
}

.favorite {
  border-radius: 5px;
  border: 2px solid $myOrange;
}
</style>
