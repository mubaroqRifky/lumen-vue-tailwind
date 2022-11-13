import Vue from "vue";

import router from "./router/index";
import store from "./store/index";
import helpers from "./helpers/index";

Vue.mixin(helpers);

import App from "../views/App.vue";

const app = new Vue({
    el: "#app",
    components: { App },
    router,
    store,
});
