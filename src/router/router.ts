import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import ShopPage from "@/pages/ShopPage.vue";
import FlowerFull from "@/components/FlowerFull.vue";
import TheReg from "@/components/user/TheReg.vue";
import TheLogin from "@/components/user/TheLogin.vue";
import TheProfile from "@/components/user/TheProfile.vue";

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
        path:"/shop/flower:id",
        name:"flower:id",
        component: FlowerFull
    },
    {
        path:"/registration",
        name:"registration",
        component: TheReg
    },
    {
        path:"/login",
        name:"login",
        component: TheLogin
    },
    {
        path:"/profile",
        name:"profile",
        component: TheProfile
    }
];

export default createRouter({
    history: createWebHistory(),
    routes,
});
