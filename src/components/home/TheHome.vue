<template>
  <section class="welcome">
    <div class="browse">
      <!--   Поставить символьный шрифт: Критичность 1-->
      <h2>Flowers, 🌻 what the world needs </h2>
      <p class="browse__text">
        Browse between hounders of flowers
      </p>
      <button class="browse__button">
        Browse
      </button>
    </div>
    <div class="flowers">
      <img
          src="@/img/flower1.png"
          alt="flower1">
      <img
          src="@/img/flower2.png"
          alt="flower2">
      <img
          src="@/img/flower3.png"
          alt="flower3">
      <img
          src="@/img/flower4.png"
          alt="flower4">
      <img
          src="@/img/flower5.png"
          alt="flower5">
      <img
          src="@/img/flower6.png"
          alt="flower6">
    </div>
  </section>
  <section class="best feed-item">
    <div class="feed-item__title">
      <hr>
      <h3>Best sales</h3>
      <hr>
    </div>
    <BestSellers/>
  </section>
</template>

<script setup lang="ts">
import BestSellers from "@/components/home/BestSales.vue";
</script>

<style scoped lang="scss">
@import "@/mixins.scss";

.welcome {
  @include myFlex($ai: start);

  .browse {
    width: 400px;

    h2 {
      font-size: 60px;
      line-height: 70px;
      margin-bottom: 30px;
    }

    .browse__text {
      color: rgba(131, 131, 131, 1);
      font-size: 20px;
      margin-bottom: 45px;
    }

    .browse__button {
      border: 2px solid $myOrange;
      border-radius: 5px;
      width: 100px;
      height: 40px;
      background-color: $myOrange;
      font-size: 18px;
      color: white;
      font-weight: 300;
      transition: color 0.2s, background-color 0.2s;
      cursor: pointer;

      &:hover {
        background-color: white;
        color: $myOrange;
      }
    }
  }

  .flowers {
    gap: 20px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
}

.feed-item {
  @include myFlex($fd: column);
  margin: 100px 0 100px 0;

  .feed-item__title {
    @include myFlex();
    gap: 19px;
    margin-bottom: 33px;

    h3 {
      font-size: 32px;
    }

    hr {
      width: 165px;
      background-color: #D9D9D9;
    }
  }
}
</style>