<template>
    <div class="w-screen h-screen bg-login">
        <div class="form-login-container">
            <IconPrimary :styles="{ margin: '2em 0' }" />

            <h1 class="font-bold text-lg mt-4 mb-6 text-center">
                {{ title }}
            </h1>

            <button class="btn-google-login">
                <IconGoogle width="20px" height="20px" />
                Lanjutkan dengan Google
            </button>
        </div>
    </div>
</template>

<script>
import IconGoogle from "../../components/svg/IconGoogle.vue";
import IconPrimary from "../../components/svg/IconPrimary.vue";
export default {
    data() {
        return {
            title: "Penomoran Surat Marketing",
        };
    },
    components: { IconGoogle, IconPrimary },
};
</script>

<style lang="scss" scoped>
.bg-login {
    @apply bg-no-repeat bg-cover bg-center;
    background-image: url("../../assets/images/bg-login.png");
    background-color: $secondaryColor;

    @media screen and (max-width: 480px) {
        background-position: top 0rem right 0rem;
        background-size: contain;
    }
}

.form-login-container {
    @apply absolute
        right-1/2
        sm:right-20
        top-1/2
        transform
        translate-x-1/2
        sm:translate-x-0
        -translate-y-1/2
        h-3/4
        sm:h-2/3
        w-11/12
        sm:w-max
        p-10
        items-center
        flex
        flex-col;

    background: rgba(255, 255, 255, 0.43);
    box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.03);
    border-radius: 30px;

    @media screen and (max-width: 480px) {
        background: rgba(255, 255, 255, 0.6);
    }
}

.btn-google-login {
    @apply flex
        gap-5
        items-center
        text-base
        whitespace-nowrap;

    padding: 0.5em 2em;
    background: $bgLight;
    box-shadow: 0px 4px 17px rgba(0, 0, 0, 0.08);
    border-radius: 10px;
}
</style>
