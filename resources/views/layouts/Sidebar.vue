<template>
    <aside class="sidebar scroll-hidden">
        <div>
            <div class="user-container">
                <div class="user-image">
                    <img :src="user_img" :srcset="user_img" alt="User Image" />
                </div>

                <div class="user-info">
                    <h2 class="text-base">{{ "Jhon Benson" }}</h2>
                    <p class="text-xs">{{ "Jhon.benson@cpp.co.id" }}</p>
                </div>
            </div>
        </div>

        <nav class="navbar-container scroll-hidden">
            <ul class="navbar">
                <li class="navbar-list text-primary">
                    <router-link
                        class="menu-btn"
                        :to="{ name: 'dashboard-index' }"
                    >
                        <IconHome width="20" />
                        <span>Dashboard</span>
                    </router-link>
                </li>
                <li class="navbar-list text-primary">
                    <router-link
                        class="menu-btn"
                        :to="{ name: 'pengajuan-index' }"
                    >
                        <IconPengajuan width="20" />
                        <span>Pengajuan Biaya Promosi</span>
                    </router-link>
                </li>
                <li class="navbar-list text-primary">
                    <router-link
                        class="menu-btn"
                        :to="{ name: 'realisasi-index' }"
                    >
                        <IconRealisasi width="20" />
                        <span>Realisasi Biaya Promosi</span>
                    </router-link>
                </li>
                <li class="navbar-list text-primary">
                    <router-link
                        class="menu-btn"
                        :to="{ name: 'setting-index' }"
                    >
                        <IconSetting width="20" />
                        <span>Pengaturan</span>
                    </router-link>
                </li>
            </ul>
        </nav>

        <div class="logout-btn">
            <button class="menu-btn text-danger">
                <IconLogout height="20" />
                <span>Keluar</span>
            </button>
        </div>
    </aside>
</template>

<script>
import IconHome from "../../components/svg/IconHome.vue";
import IconPengajuan from "../../components/svg/IconPengajuan.vue";
import IconRealisasi from "../../components/svg/IconRealisasi.vue";
import IconSetting from "../../components/svg/IconSetting.vue";
import IconLogout from "../../components/svg/IconLogout.vue";

export default {
    data() {
        return {
            user_img:
                "https://images.unsplash.com/photo-1514315384763-ba401779410f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=383&q=80",
        };
    },
    components: {
        IconHome,
        IconPengajuan,
        IconRealisasi,
        IconSetting,
        IconLogout,
    },
    computed: {},
    methods: {},
    mounted() {},
};
</script>

<style lang="scss" scoped>
.sidebar {
    @apply grid relative max-h-screen content-start;
    border-radius: 0px 40px 0px 0px;
    background: $primaryColor;

    @media only screen and (max-width: 426px) {
        @apply absolute top-0 bottom-0 transition-all z-50;
        left: -35%;
    }

    > div:first-child {
        padding: 0 2em 1em;

        @media only screen and (max-width: 768px) {
            padding: 0;
        }
    }

    .user-container {
        @apply hidden md:grid gap-4 text-center justify-items-center content-center mt-8;

        .user-image {
            @apply rounded-full overflow-hidden;
            width: 160px;
            height: 160px;
            border: 7px solid white;
            filter: drop-shadow(0px 4px 33px rgba(0, 0, 0, 0.28));

            img {
                @apply w-full h-full object-cover;
            }
        }

        .user-info {
            color: $textLight;
        }
    }

    .navbar-container {
        @apply overflow-y-scroll;

        .navbar {
            font-size: 0.8rem;
            @apply list-none p-0;

            @media only screen and (max-width: 768px) {
                @apply grid gap-4 pt-4;
            }

            .navbar-list {
                margin: 0.8rem 2rem;
                max-width: 200px;

                > a {
                    @apply transition-all;
                    &.router-link-active {
                        background: $bgSuccess;
                        color: $textLight;
                    }
                }
            }
        }
    }

    .logout-btn {
        @apply grid absolute bottom-0 left-0 right-0;
        font-size: 0.8rem;
        padding: 1rem 2rem;
    }

    .menu-btn {
        @apply flex px-5 py-2 gap-3 items-center;
        background: $bgLight;
        border-radius: 14px;
        line-height: 1;
    }
}
</style>
