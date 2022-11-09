<template>
  <div class="review-wrapper">
    <div class="review">
      <img
          :src="`src/img/avatars/${props.review.img}`"
          :alt="props.review.name"
          class="review__avatar">
      <div class="review__info">
        <p class="review__name">
          {{ props.review.name }}
        </p>
        <p class="review__description">
          {{ props.review.description }}
        </p>
        <div class="stars">
          <img
              v-for="i in props.review.stars"
              :key="i"
              src="@/icons/star.png"
              alt="start">
          <img
              v-for="i in 5 - props.review.stars"
              :key="i"
              src="@/icons/starEmpty.png"
              alt="start">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {IReview} from "@/interfaces/IReview";

const props = defineProps<{
  review: IReview;
}>();

</script>

<style scoped lang="scss">
@import "@/mixins.scss";

.review {
  @include myFlex($ai: start);
  background-color: white;
  padding: 20px;
  max-width: 380px;

  .review__avatar {
    height: 58px;
    width: 58px;
    border-radius: 50%;
    margin-right: 16px;
  }

  .review__info {

    .review__name {
      font-size: 22px;
      font-weight: 500;
      margin-bottom: 11px;
    }

    .review__description {
      width: 251px;
      color: rgba(131, 131, 131, 1);
      font-size: 18px;
      font-weight: 400;
      line-height: 25px;
      margin-bottom: 15px;
    }

    .stars {
      display: flex;
      gap: 5px;
    }
  }
}
</style>