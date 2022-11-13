import Vue from "vue";
import VueRouter from "vue-router";

import LoginIndex from "../../views/auth/Login.vue";
import MainIndex from "../../views/layouts/Main.vue";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        { path: "/", redirect: { name: "dashboard-index" } },
        { path: "/login", component: LoginIndex },
        {
            path: "/",
            name: "home",
            children: [],
            component: MainIndex,
        },
    ],
});

export default router;
