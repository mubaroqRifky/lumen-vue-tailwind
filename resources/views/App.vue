<template>
    <router-view></router-view>
</template>

<script>
export default {
    name: "App",
};
</script>

<style lang="scss">
// Import Main styles for this application
/* @import "../scss/app.scss"; */

.input-base {
    @apply border rounded-lg px-3 py-2 pr-8 text-xs w-full;
    border-color: $primaryColor;

    &:focus {
        outline: 2px solid $primaryTransparent;
    }
}
</style>
