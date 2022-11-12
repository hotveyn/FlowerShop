<template>
  <!--  Возможно нужно порезать на компоненты-->
  <div class="log">
    <div class="log__form">
      <div>
        <div class="log__title">
          <h2>Login</h2>
          <router-link
              class="rt-link"
              to="/">
            <button class="log__home">
              <img
                  src="@/icons/home.svg"
                  alt="home">
              Back to home
            </button>
          </router-link>
        </div>
        <p class="log__phrase">
          Login and have more fun
        </p>
        <input
            v-model="logName"
            :placeholder="usernamePlaceholder"
            type="text"
            class="log__username-input">
        <input
            v-model.trim="logPassword"
            type="password"
            :placeholder="passwordPlaceholder"
            class="log__password-input">
        <button
            class="log__button"
            @click="login()">
          Login
        </button>
      </div>
      <div>
        <p class="log__already">
          dont have an account?
          <router-link
              to="/registration"
              class="rt-link">
            Register
          </router-link>
        </p>
      </div>
    </div>
    <div class="log__img-wrapper">
      <img
          class="log__img"
          src="@/img/login.png"
          alt="log">
    </div>
  </div>
</template>
<script setup lang="ts">
import {Ref, ref} from "vue";
import {useUsersStore} from "@/stores/users";
import {useRouter} from "vue-router";

const usersStore = useUsersStore();

const router = useRouter();

const logName: Ref<string> = ref("");
const logPassword: Ref<string> = ref("");
const usernamePlaceholder: Ref<string> = ref("Username");
const passwordPlaceholder: Ref<string> = ref("Password");

function login(): void {
  // Fix: забил на DRY
  if (logName.value !== "" && logPassword.value !== "") {
    if (usersStore.login(logName.value, logPassword.value) === "Ошибка") {
      usernamePlaceholder.value = "This user there is no in data base";
      passwordPlaceholder.value = "Password";
      [logName.value, logPassword.value] = "";
    } else {
      router.push("/");
      [logName.value, logPassword.value] = "";
    }
  } else {
    usernamePlaceholder.value = "Введите все значения";
    passwordPlaceholder.value = "Введите все значения";
  }
}
</script>

<style scoped lang="scss">
@import "@/mixins.scss";


.log {
  @include myFlex($jc: center);
  max-width: 976px;
  height: 673px;
  margin: 0 auto;

  .log__form {
    @include myFlex($fd: column);
    box-sizing: border-box;
    background-color: white;
    height: 100%;
    min-width: 50%;
    padding: 40px 30px;

    > div {
      width: 100%;
    }

    .log__title {
      margin-bottom: 20px;
      @include myFlex();

      h2 {
        font-size: 32px;
      }

      .log__home {
        @include myFlex();
        border: 0;
        background-color: white;
        gap: 5px;
        font-size: 18px;
        cursor: pointer;
      }
    }

    .log__phrase {
      font-size: 18px;
      color: rgba(131, 131, 131, 1);
      margin-bottom: 50px;
    }

    input {
      box-sizing: border-box;
      display: block;
      width: 100%;
      padding: 20px 30px;
      border: 2px solid rgba(217, 217, 217, 1);
      border-radius: 5px;
      margin-bottom: 15px;
      color: rgba(131, 131, 131, 1);
      font-size: 18px;

      &:focus, &:hover {
        outline: none;
        border-color: $myOrange;
      }
    }

    .log__button {
      width: 100%;
      padding: 17px 0;
      font-size: 24px;
      border: 2px solid $myOrange;
      background-color: white;
      border-radius: 5px;
      color: $myOrange;
      transition: color 0.2s, background-color 0.2s;
      margin-top: 15px;
      cursor: pointer;

      &:hover {
        background-color: $myOrange;
        color: white;
      }
    }

    .log__already {
      font-size: 20px;
      color: rgba(131, 131, 131, 1);
      display: block;
      width: 282px;
      margin: 120px auto 0;
    }

    .rt-link {
      text-decoration: none;
      color: $myOrange;
    }
  }

  .log__img-wrapper {
    height: 100%;
    width: 50%;

    .log__img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
