<template lang="">
    <header class="flex gap-4 justify-between items-center">
        <div>
            <h2 class="font-bold text-lg">Hello, Jhon</h2>
            <p>Rabu, 10 Oktober 2022</p>
        </div>

        <div class="flex items-center gap-4">
            <span class="relative w-80 inline-block">
                <input type="text" placeholder="Search..." class="input-base" />
                <IconSearch
                    className="absolute right-2 top-1 pointer-events-none text-primary"
                    width="20px"
                />
            </span>
        </div>
    </header>
</template>

<script>
import IconSearch from "../../components/svg/IconSearch.vue";

export default {
    components: { IconSearch },
};
</script>

<style lang=""></style>
