<template>
  <div
      v-show="isShowFlowerInShopBySearchedText"
      class="flower"
  >
    <div class="img-wrapper">
      <!-- Fix: бага с отображение. Критичность: 5 -->
      <RouterLink
          class="rt-link"
          :to="'/flower/'+props.flower.id">
        <img
            class="flower__img"
            :src="`/img/flowers//${props.flower.img}`"
            :alt="props.flower.name">
      </RouterLink>
    </div>
    <p class="flower__name">
      {{ props.flower.name }}
    </p>
    <div class="buy">
      <p class="buy__price">
        {{ props.flower.price }}$
      </p>
      <AddToCart :flower="props.flower"/>
    </div>
  </div>
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

const isShowFlowerInShopBySearchedText = computed(() => {
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
@import "@/assets/css/mixins.scss";

.rt-link {
  text-decoration: none;
  color: black;
}

.flower {
  background-color: white;
  box-sizing: border-box;
  padding: 17px;
  border-radius: 5px;
  transition: box-shadow 0.5s;
  max-height: 358px;

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
      animation: rise 0.2s linear;
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

@keyframes rise {
  0% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
</style>
