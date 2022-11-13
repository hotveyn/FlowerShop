<template>
  <div class="profile-container">
    <router-link to="/">
      <button class="home-button">
        Back to home
      </button>
    </router-link>
    <TheProfileInfo/>
    <FavoriteFlowers/>
  </div>
</template>

<script setup lang="ts">
import FavoriteFlowers from "@/components/user/FavoriteFlowers.vue";
import TheProfileInfo from "@/components/user/TheProfileInfo.vue";
</script>

<style scoped lang="scss">
@import "@/mixins.scss";

.profile-container {
  max-width: 1050px;
  margin: 0 auto;
}

.home-button {
  padding: 7px 17px;
  border-radius: 5px;
  border: 2px solid $myOrange;
  background-color: white;
  cursor: pointer;
  color: $myOrange;
  transition: color 0.2s, background-color 0.2s;
  font-size: 18px;
  margin-bottom: 30px;

  &:hover {
    color: white;
    background-color: $myOrange;
  }
}


</style>
