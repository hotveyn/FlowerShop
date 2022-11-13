<template>
  <button
      :class="{'active':shopStore.reverse}"
      class="cheep-button"
      @click="changeReverse()">
    <img
        src="@/assets/icons/cheep.png"
        alt="cheep">
    Reverse
  </button>
</template>

<script setup lang="ts">
import {useShopStore} from "@/stores/shop";
import {Ref, ref} from "vue";

const shopStore = useShopStore();

const isReverse: Ref<boolean> = ref(false);
function changeReverse():void{
  isReverse.value = !isReverse.value;
  shopStore.setReverse(isReverse.value);
}
</script>

<style scoped lang="scss">
@import "@/mixins.scss";

.cheep-button {
  padding: 10px 15px;
  border: 3px solid white;
  border-radius: 5px;
  background-color: white;
  cursor: pointer;
  @include myFlex();
  font-size: 19px;
  transition: border 0.2s;
  &:hover{

    border: 3px solid $myOrange;
  }
  img {
    margin-right: 5px;
  }
}

.active{
  border: 3px solid $myOrange;
}
</style>
