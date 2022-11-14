import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import ShopPage from "@/pages/ShopPage.vue";
import FlowerInDetail from "@/components/FlowerInDetail.vue";
import TheReg from "@/components/user/TheReg.vue";
import TheLogin from "@/components/user/TheLogin.vue";
import TheProfile from "@/components/user/TheProfile.vue";
import CartPage from "@//pages/CartPage.vue";

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
    {
        path: "/flower/:id",
        name: "flower",
        component: FlowerInDetail,
    },
    {
        path: "/registration",
        name: "registration",
        component: TheReg,
    },
    {
        path: "/login",
        name: "login",
        component: TheLogin,
    },
    {
        path: "/profile",
        name: "profile",
        component: TheProfile,
    },
    {
        path: "/cart",
        name: "cart",
        component: CartPage,
    },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});
