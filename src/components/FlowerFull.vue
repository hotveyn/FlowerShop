<template>
  <div class="flower-full">
    <router-link to="/shop">
      <button class="back-button">
        Back to shopping
      </button>
    </router-link>
    <div class="flower">
      <img
          class="flower__img"
          :src="'/src/img/flowers/'+flower.img"
          alt="flower">
      <div class="flower__info">
        <div class="desc">
          <h2 class="flower__name">
            {{ flower.name }}
          </h2>
          <p class="flower__description">
            {{ flower.description }}
          </p>
          <div class="flower__rate">
            <div class="stars">
              <img
                  src="@/icons/star.png"
                  alt="start">
              <p class="flower__rate-number">
                {{ flower.rate }}/5
              </p>
            </div>
            <p class="flower__opinions">
              ({{ flowerReviewLenght }} people opinion)
            </p>
          </div>
        </div>
        <div class="flower__buy-form">
          <p class="flower__price">
            {{ flower.price }}$ / EACH
          </p>
          <div class="flower__buttons">
            <AddToFavorite :flower-to-but="flower"/>
            <AddToCart :flower-to-but="flower"/>
          </div>
        </div>
      </div>
    </div>
    <div class="flower-reviews"/>
  </div>
</template>

<script setup lang="ts">
import {IFlower} from "@/interfaces/IFlower";
import {computed} from "vue";
import {useRoute} from "vue-router";
import {useFlowersStore} from "@/stores/flowers";
import AddToCart from "@/components/AddToCart.vue";
import AddToFavorite from "@/components/AddToFavorite.vue";

const flowerStore = useFlowersStore();

const route = useRoute();

const flower = computed((): IFlower => {
  return flowerStore.getFlowerById(Number(route.params.id));
});

const flowerReviewLenght = computed(():number=>{
  return flower.value.reviews?.length ? flower.value.reviews.length:0;
});
</script>

<style scoped lang="scss">
@import "@/mixins.scss";

.flower-full {
  @include myFlex($ai: start, $fd: column);
  width: 100%;

  .back-button {
    width: 163px;
    height: 40px;
    border: 1px solid $myOrange;
    border-radius: 5px;
    background-color: $myOrange;
    color: white;
    cursor: pointer;
    font-size: 18px;
    transition: color 0.2s, background-color 0.2s;
    margin-bottom: 35px;

    &:hover {
      color: $myOrange;
      background-color: white;
    }

  }

  .flower {
    @include myFlex();
    width: 100%;

    padding: 50px;
    background-color: white;
    border-radius: 5px;

    .flower__img {
      width: 356px;
      height: 326px;
      object-fit: cover;
      border-radius: 20px;
    }
    .flower__info{
      @include myFlex($fd:column,$ai:start);
      max-width: 680px;
      height: 326px;


      .flower__name{
        font-size: 26px;
        margin-bottom: 22px;
      }
      .flower__description{
        color: #838383;
        font-size: 22px;
        line-height: 35px;
        margin-bottom: 23px;
      }
      .flower__rate{
        margin-bottom: 37px;
        .stars{
          @include myFlex($jc:start);
          img{
            margin-right: 5px;
            width: 22px;
          }
          .flower__rate-number{
            font-size: 22px;
          }
          margin-bottom: 6px;
        }
        .flower__opinions{
          color: #838383;
        }
      }
      .flower__buy-form{
        @include myFlex();
        width: 100%;
        .flower__price{
          font-size: 22px;
        }
        .flower__buttons{
          @include myFlex();
          gap: 5px;

        }
      }
    }
  }

}
</style>