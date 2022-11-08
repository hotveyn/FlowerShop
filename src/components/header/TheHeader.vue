<template>
  <header class="header">
    <RouterLink
        to="/"
        class="rt-link">
      <h1><span class="orange-text">Flower</span> Shop</h1>
    </RouterLink>
    <nav>
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
        <img src="@/icons/log.svg" alt="log">
      </RouterLink>
      <RouterLink to="/">
        <img src="@/icons/cart.svg" alt="log">
      </RouterLink>
    </div>
  </header>
</template>

<script setup lang="ts">
import {useRoute} from "vue-router";

const route = useRoute();
</script>

<style lang="scss">
$myOrange: rgba(255, 143, 82, 1);
@mixin myFlex($jc:space-between,$ai:center,$fd:row) {
  display: flex;
  justify-content: $jc;
  align-items: $ai;
  flex-direction: $fd;
}

.header {
  @include myFlex($ai:flex-end);
  padding: 30px 0;
  font-family: 'Roboto', sans-serif;

  .rt-link {
    text-decoration: none;
    color: black;
  }

  .orange-text {
    color: $myOrange;
  }

  h1 {
    font-size: 32px;
    font-weight: 500;
  }

  nav ul {
    @include myFlex();

    .rt-link{
      font-size: 23px;
    }
    .rt-link:not(:first-child) {
      margin-left: 20px;
    }

  }

  .reg-cart{
    @include myFlex();
    width: 70px;
  }
}

</style>