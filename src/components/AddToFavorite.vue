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
import {useUsersStore} from '@/stores/users';
import {ref} from "vue";
import {useRouter} from 'vue-router';

const usersStore = useUsersStore();
const flowerStore = useFlowersStore();
const router = useRouter();

const props = defineProps<{
  flowerToBut: IFlower;
}>();

const isFavorite = ref(flowerStore.getFlowerById(props.flowerToBut.id).favorite);

function makeFavorite() {
  if(usersStore.authorizedUser){
    flowerStore.flowerToFavorite(props.flowerToBut);
    isFavorite.value = !isFavorite.value;
  }else{
    router.push("/login")
  }
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
