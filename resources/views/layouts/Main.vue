<template lang="">
    <section class="dashboard-main-container">
        <main class="dashboard-main">
            <router-view></router-view>
        </main>
    </section>
</template>

<script>
import IconSearch from "../../components/svg/IconSearch.vue";

export default {
    components: {
        IconSearch,
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
