import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import HomePage from "@/pages/HomePage.vue";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "home",
        component: HomePage,
    },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});
