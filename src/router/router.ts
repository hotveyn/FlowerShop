import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import ShopPage from "@/pages/ShopPage.vue";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "home",
        component: HomePage,
    },
    {
        path: "/shop",
        name: "shop",
        component: ShopPage,
    },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});
