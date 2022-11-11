<template>
  <router-link
      class="rt-link"
      :to="'/shop/flower'+props.flower.id">
    <div
        v-show="isShowFlowerInShopBySearchedText"
        class="flower">
      <div class="img-wrapper">
        <!-- Фикс бага с отображение. Критичность: 3 -->
        <img
            :src="`src/img/flowers/${props.flower.img}`"
            :alt="props.flower.name">
      </div>
      <p class="flower__name">
        {{ props.flower.name }}
      </p>
      <div class="buy">
        <p class="buy__price">
          {{ props.flower.price }}$
        </p>
        <AddToCart :flower-to-but="props.flower"/>
      </div>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import {IFlower} from "@/interfaces/IFlower";
import AddToCart from "@/components/AddToCart.vue";
import {useShopStore} from "@/stores/shop";
import {computed} from "vue";
import {useRoute} from "vue-router";

const props = defineProps<{
  flower: IFlower;
}>();

const route = useRoute();

const shopStore = useShopStore();

const isShowFlowerInShopBySearchedText = computed((): boolean => {
  if (route.name === "shop") {
    const searchedText = shopStore.search.trim().toLowerCase();
    if (searchedText !== "") {
      const flowerName = props.flower?.name.toLowerCase();
      return flowerName.search(searchedText) !== -1;
    } else {
      return true;
    }
  }
  return true;
});

</script>

<style scoped lang="scss">
@import "@/mixins.scss";

.rt-link{
  text-decoration: none;
  color: black;
}

.flower {
  background-color: white;
  padding: 17px;
  border-radius: 5px;
  transition: box-shadow 0.5s;

  &:hover {
    box-shadow: 0 0 15px #bdbdbd;
  }

  .img-wrapper {
    height: 230px;
    width: 250px;
    margin-bottom: 9px;
    border-radius: 5px;
    overflow: hidden;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  .flower__name {
    font-size: 26px;
    margin-bottom: 35px;
  }

  .buy {
    @include myFlex();

    .buy__price {
      font-size: 18px;
      color: rgba(131, 131, 131, 1);
    }

  }
}
</style>