<template>
  <header class="header">
    <div class="header-container">
      <RouterLink
          to="/"
          class="rt-link">
        <h1><span class="orange-text">Flower</span> Shop</h1>
      </RouterLink>
      <nav class="nav-bar">
        <ul>
          <RouterLink
              to="/"
              :class="{'orange-text':route.name === 'home'}"
              class="rt-link">
            <li>Home</li>
          </RouterLink>
          <RouterLink
              to="/"
              :class="{'orange-text':route.name === 'shop'}"
              class="rt-link">
            <li>Shop</li>
          </RouterLink>
          <RouterLink
              to="/"
              :class="{'orange-text':route.name === 'blog'}"
              class="rt-link">
            <li>Blog</li>
          </RouterLink>
          <RouterLink
              to="/"
              :class="{'orange-text':route.name === 'about'}"
              class="rt-link">
            <li>About</li>
          </RouterLink>
        </ul>
      </nav>
      <div class="reg-cart">
        <RouterLink to="/">
          <div class="log-button">
            <img
                src="@/icons/log.svg"
                alt="log">
          </div>
        </RouterLink>
        <RouterLink to="/">
          <div class="cart-button">
            <img
                src="@/icons/cart.svg"
                alt="log">
          </div>
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import {useRoute} from 'vue-router';

const route = useRoute();
</script>

<style scoped lang="scss">
@import "@/mixins.scss";

.header-container {

  @include myFlex($ai: flex-end);
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 30px 0;
  font-family: 'Roboto', sans-serif;

  .rt-link {
    text-decoration: none;
    color: black;
  }


  h1 {
    font-size: 32px;
    font-weight: 500;
  }

  .nav-bar ul {
    @include myFlex();

    .rt-link {
      font-size: 23px;
      transition: font-weight 0.1s;

      &:not(:first-child) {
        margin-left: 20px;
      }
    }

  }

  .orange-text {
    color: $myOrange;
  }

  .reg-cart {
    @include myFlex();
    width: 70px;
  }
}

</style>