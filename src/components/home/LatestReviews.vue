<template>
  <div class="late-flowers">
    <TheReview
        v-for="i in latestReviews"
        :key="i.id"
:review="i"/>
  </div>
</template>

<script setup lang="ts">
import TheReview from "@/components/home/TheReview.vue";
import {useReviewStore} from "@/stores/review";

import {computed} from "vue";

const reviewStore = useReviewStore();
const review = reviewStore.getReviews();

const latestReviews = computed(() => {
  const tempReviews = [...review].reverse();
  tempReviews.length = 3;
  return tempReviews;
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