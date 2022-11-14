import router from "@/router/router";
import { createApp } from "vue";
import { createPinia } from "pinia";
import "@/assets/css/reset.css";
import App from "./App.vue";
const pinia = createPinia();

createApp(App).use(pinia).use(router).mount("#app");
