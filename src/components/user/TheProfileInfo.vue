<template>
  <div class="profile">
    <h2><span class="orange">Hello,</span> {{ user?.username }}</h2>
    <hr>
    <div class="info">
      <div class="stats">
        <div class="stat">
          <p class="stat__username">
            Username:
          </p>
          <input
              v-model="userName"
              type="text"
              class="stat__input"
              placeholder="UserName">
        </div>
        <div class="stat">
          <p class="stat__password">
            Password:
          </p>
          <input
              v-model="userPassword"
              type="text"
              class="stat__input"
              placeholder="Password">
        </div>
        <div class="stat">
          <p class="stat__phone">
            Phone:
          </p>
          <input
              v-model="userPhone"
              type="text"
              class="stat__input"
              placeholder="Phone">
        </div>
        <div class="stat">
          <p class="stat__email">
            Email:
          </p>
          <input
              v-model="userEMail"
              type="text"
              class="stat__input"
              placeholder="Email">
        </div>
      </div>
      <div class="stat__about">
        <div class="about">
          <p class="stat__email">
            About me:
          </p>
          <textarea
              v-model="userAbout"
              class="about"
              placeholder="Something about you"/>
        </div>
      </div>
    </div>
    <div class="buttons">
      <button
          class="profile__save-button"
          @click="changeUserInfo()">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
          <path
              d="M5 21h14a2 2 0 0 0 2-2V8a1 1 0 0 0-.29-.71l-4-4A1 1 0 0 0 16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2zm10-2H9v-5h6zM13 7h-2V5h2zM5 5h2v4h8V5h.59L19 8.41V19h-2v-5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v5H5z"/>
        </svg>
        Save
      </button>
      <button
          class="profile__exit-button"
          @click="exitFromAuthorizedUser()">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
          <path
              d="M5 21h14a2 2 0 0 0 2-2V8a1 1 0 0 0-.29-.71l-4-4A1 1 0 0 0 16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2zm10-2H9v-5h6zM13 7h-2V5h2zM5 5h2v4h8V5h.59L19 8.41V19h-2v-5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v5H5z"/>
        </svg>
        Exit
      </button>
</div>
  </div>
</template>

<script setup lang="ts">
import {useUsersStore} from "@/stores/users";
import {Ref, ref} from "vue";
import {useRouter} from "vue-router";

const userStore = useUsersStore();

const user = userStore.authorizedUser!;
const router = useRouter();

const userName: Ref<string> = ref(user.username);
const userPassword: Ref<string> = ref(user.password);
const userPhone: Ref<number | undefined> = ref(user.phone);
const userEMail: Ref<string> = ref(user.email);
const userAbout: Ref<string | undefined> = ref(user.aboutMe);

function changeUserInfo(): void {
  userStore.setAuthorizedUserName(userName.value);
  userStore.setAuthorizedUserPassword(userPassword.value);
  userStore.setAuthorizedUserPhone(userPhone.value!);
  userStore.setAuthorizedUserEmail(userEMail.value);
  userStore.setAuthorizedUserAboutMe(userAbout.value!);
}

function exitFromAuthorizedUser(): void {
  router.push("/");
  userStore.exit();
}
</script>

<style scoped lang="scss">
@import "@/assets/css/mixins.scss";

.profile {
  background-color: white;
  padding: 30px;
  @include myFlex($fd: column, $ai: start);

  .orange {
    color: $myOrange;
  }

  hr {
    width: 100%;
  }

  h2 {
    font-size: 32px;
    margin-bottom: 15px;
  }

  .info {
    @include myFlex($ai: start);
    margin-top: 15px;
    width: 100%;

    .stats {
      @include myFlex($ai: start, $fd: column);
      width: 455px;
      gap: 10px;

      .stat {
        @include myFlex();
        gap: 15px;
        width: 100%;

        p {
          font-size: 22px;
        }

        input {
          box-sizing: border-box;
          padding: 13px 16px;
          max-width: 310px;
          width: 100%;
          border-radius: 5px;
          border: 2px solid #939393;
          font-size: 16px;
          transition: border-color 0.2s;

          &:focus, &:hover {
            border-color: $myOrange;
            outline: none;
          }
        }
      }
    }

    .stat__about {
      max-width: 455px;
      width: 100%;

      .about {
        @include myFlex($ai: start);
        gap: 15px;
        width: 100%;
        height: 100%;

        p {
          min-width: 116px;
          font-size: 22px;
          margin-top: 10px;
        }

        textarea {
          border: 2px solid #939393;
          border-radius: 5px;
          outline: none;
          height: 214px;
          padding: 10px;
          box-sizing: border-box;
          font-size: 16px;
          resize: none;
          transition: border-color 0.2s;

          &:hover, &:focus {
            border-color: $myOrange;
          }
        }
      }
    }
  }
  .buttons{
    align-self: end;
    @include myFlex($jc: center);
    gap: 15px;
    .profile__save-button, .profile__exit-button {
      @include myFlex($jc: center);
      margin-top: 30px;
      gap: 5px;
      min-width: 163px;
      padding: 10px 0;
      border: 2px solid $myOrange;
      border-radius: 5px;
      background-color: white;
      cursor: pointer;
      font-size: 20px;
      transition: color 0.2s, fill 0.2s, background-color 0.2s;
      color: $myOrange;

      svg {
        width: 30px;
        fill: $myOrange;
      }

      &:hover {
        background-color: $myOrange;
        color: white;

        svg {
          fill: white;
        }
      }
    }
  }

}
</style>
