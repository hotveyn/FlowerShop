<template>
  <div class="late-flowers">
    <TheReview
        v-for="i in latestReviews"
        :key="i.id"
        :review="i"/>
  </div>
</template>

<script setup lang="ts">
import TheReview from '@/components/home/TheReview.vue';
import {useReviewStore} from '@/stores/review';

import {computed} from 'vue';

const reviewStore = useReviewStore();
const reviews = reviewStore.getReviews;

const latestReviews = computed(() => {
  return [reviews[reviews.length - 1],
    reviews[reviews.length - 2],
    reviews[reviews.length - 3]];
});


</script>

<style scoped lang="scss">
.late-flowers {
  gap: 25px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(1, 1fr);
}
</style>
