<template lang="">
    <section class="dashboard-main-container">
        <Sidebar />
        <main class="dashboard-main">
            <Header />
            <router-view></router-view>
        </main>
    </section>
</template>

<script>
import Sidebar from "./Sidebar.vue";
import Header from "./Header.vue";
import IconSearch from "../../components/svg/IconSearch.vue";

export default {
    components: {
        Sidebar,
        IconSearch,
        Header,
    },
};
</script>

<style lang="scss">
.dashboard-main-container {
    @apply flex min-h-screen w-screen;
    background: $bgLight;

    .dashboard-main {
        @apply max-h-screen overflow-y-scroll flex flex-col gap-8 flex-1 p-6 text-sm;
    }
}
</style>
