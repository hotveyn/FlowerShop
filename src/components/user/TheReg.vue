<template>
  <!--  Возможно нужно порезать на компоненты-->
  <div class="log">
    <div class="reg__form">
      <div class="reg__title">
        <h2>Register</h2>
        <router-link
            class="rt-link"
            to="/">
          <button class="reg__home">
            <img
                src="@/assets/icons/home.svg"
                alt="home">
            Back to home
          </button>
        </router-link>
      </div>
      <p class="reg__phrase">
        Register and help us help you
      </p>
      <input
          v-model.trim="regMail"
          type="email"
          placeholder="e-mail"
          class="reg__email-input">
      <input
          v-model.trim="regName"
          type="text"
          placeholder="Username"
          class="reg__username-input">
      <input
          v-model.trim="regPassword"
          type="password"
          placeholder="Password"
          class="reg__password-input">
      <p class="reg__law">
        with registering your accepting our
        <a
            class="rt-link"
            href="https://example.com/">terms</a> and
        <a
            class="rt-link"
            href="https://example.com/">privacy policy</a>
      </p>
      <button
          class="reg__button"
          @click="reg()">
        Register
      </button>
      <p class="reg__already">
        Already have an account?
        <router-link
            to="/login"
            class="rt-link">
          Login
        </router-link>
      </p>
    </div>
    <div class="reg__img-wrapper">
      <img
          class="reg__img"
          src="@/assets/img/reg.png"
          alt="reg">
    </div>
  </div>
</template>
<script setup lang="ts">
import {Ref, ref} from "vue";
import {useUsersStore} from "@/stores/users";
import {useRouter} from "vue-router";

const usersStore = useUsersStore();

const router = useRouter();

const regMail: Ref<string> = ref("");
const regName: Ref<string> = ref("");
const regPassword: Ref<string> = ref("");

function reg(): void {
  const canMakeUser: boolean = regMail.value !== "" && regName.value !== "" && regPassword.value !== ""
      && usersStore.containUser(regMail.value);
  if (canMakeUser) {
    usersStore.regUser(regName.value, regMail.value, regPassword.value);
    [regMail.value, regName.value, regPassword.value] = "";
    router.push("/");
  } else {
    [regMail.value, regName.value, regPassword.value] =
        ["Такой пользователь уже есть", "либо вы не заполнили все поля", ""];
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

  .reg__form {
    box-sizing: border-box;
    background-color: white;
    height: 100%;
    width: 50%;
    padding: 40px 30px;

    .reg__title {
      margin-bottom: 20px;
      @include myFlex();

      h2 {
        font-size: 32px;
      }

      .reg__home {
        @include myFlex();
        border: 0;
        background-color: white;
        gap: 5px;
        font-size: 18px;
        cursor: pointer;
      }
    }

    .reg__phrase {
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

    .reg__law {
      margin-top: 45px;
      color: rgba(131, 131, 131, 1);
      font-size: 16px;
      line-height: 25px;
    }

    .reg__button {
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

    .reg__already {
      font-size: 20px;
      color: rgba(131, 131, 131, 1);
      display: block;
      width: 282px;
      margin: 70px auto 0;
    }

    .rt-link {
      text-decoration: none;
      color: $myOrange;
    }
  }

  .reg__img-wrapper {
    height: 100%;
    width: 50%;

    img {
    }
  }
}
</style>
