<template>
  <div class="filter">
    <button
        :class="{'button-border':isRadioShow}"
        class="shop__filter shop__button"
        @click="showSort()">
      <img
          src="@/assets/icons/filter.png"
          alt="filter">
      Sorting
    </button>
    <div
        v-show="isRadioShow"
        class="radio-button-group">
      <label>
        <input
            v-model="sortMod"
            type="radio"
            name="category"
            value="Name"
            class="real-radio"
            checked>
        <span class="custom-radio"/>
        Name
      </label>
      <label>
        <input
            v-model="sortMod"
            type="radio"
            name="category"
            value="Rate"
            class="real-radio">
        <span class="custom-radio"/>
        Rate
      </label>
      <label>
        <input
            v-model="sortMod"
            type="radio"
            name="category"
            value="Popular"
            class="real-radio">
        <span class="custom-radio"/>
        Popular
      </label>
      <label>
        <input
            v-model="sortMod"
            type="radio"
            name="category"
            value="Price"
            class="real-radio">
        <span class="custom-radio"/>
        Price
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import {Ref, ref, watch} from "vue";
import {useShopStore} from "@/stores/shop";

type SortType = "Name" | "Popular" | "Rate" | "Price";


const isRadioShow: Ref<boolean> = ref(false);
// Возможно тут нужен computed ну я хуй знает
function showSort() {
  isRadioShow.value = !isRadioShow.value;
}

const sortMod: Ref<SortType> = ref("Name");

const shopStore = useShopStore();

watch(sortMod, (newFilterMod: SortType)=>{
  shopStore.setSortMod(newFilterMod);
});

</script>

<style scoped lang="scss">
@import "@/mixins.scss";

.filter {
  @include myFlex();
  position: relative;

  .shop__button {
    padding: 10px 15px;
    border: 3px solid white;
    border-radius: 5px;
    background-color: white;
    cursor: pointer;
    @include myFlex();
    font-size: 19px;
    transition: border 0.2s;

    &:hover {
      border: 3px solid $myOrange;
    }

    img {
      margin-right: 5px;
    }
  }
  .button-border{
    border: 3px solid $myOrange;
  }
  .radio-button-group {
    @include myFlex($ai: start, $fd: column);

    position: absolute;
    transform: translate(170%, 0);
    margin-left: 10px;

    label {
      cursor: pointer;
    }

    .real-radio {
      width: 0;
      height: 0;
      position: absolute;
      opacity: 0;
    }

    .custom-radio {
      position: relative;
      display: inline-block;
      width: 12px;
      height: 12px;
      background: #ffffff;
      border: 2px solid $myGrey;
      border-radius: 50%;
      vertical-align: text-top;
      margin-right: 3px;
    }

    .custom-radio::before {
      content: '';

      display: inline-block;
      width: 7px;
      height: 7px;
      background: $myOrange;
      border-radius: 50%;

      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) scale(0);

      transition: 0.2s ease-in;
    }

    .real-radio:checked + .custom-radio::before {
      /* display: block; */
      transform: translate(-50%, -50%) scale(1);
      outline: none;
    }
  }
}
</style>
