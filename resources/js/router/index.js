import Vue from "vue";
import VueRouter from "vue-router";

import LoginIndex from "../../views/auth/Login.vue";
import MainIndex from "../../views/layouts/Main.vue";

import DashboardIndex from "../../views/dashboard/DashboardIndex.vue";
import PengajuanIndex from "../../views/pengajuan/PengajuanIndex.vue";
import RealisasiIndex from "../../views/realisasi/RealisasiIndex.vue";
import SettingIndex from "../../views/setting/SettingIndex.vue";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        { path: "/", redirect: { name: "dashboard-index" } },
        { path: "/login", component: LoginIndex },
        {
            path: "/",
            name: "home",
            children: [
                {
                    path: "/dashboard",
                    name: "dashboard-index",
                    components: {
                        default: DashboardIndex,
                    },
                },
                {
                    path: "/pengajuan",
                    name: "pengajuan-index",
                    component: PengajuanIndex,
                },
                {
                    path: "/realisasi",
                    name: "realisasi-index",
                    component: RealisasiIndex,
                },
                {
                    path: "/setting",
                    name: "setting-index",
                    component: SettingIndex,
                },
            ],
            component: MainIndex,
        },
    ],
});

export default router;
