import Vue from "vue";

import VueCookies from "vue-cookies";
Vue.use(VueCookies);

import Axios from "axios";

const prot =
    process.env.MIX_API_PROT === ""
        ? window.location.protocol
        : process.env.MIX_API_PROT;
const host =
    process.env.MIX_API_HOST === ""
        ? window.location.host
        : process.env.MIX_API_HOST;
const port =
    process.env.MIX_API_PORT === "" ? "" : ":" + process.env.MIX_API_PORT;

Axios.interceptors.request.use(function(config) {
    config.headers.Authorization = `Bearer ${$cookies.get("token_auth")}`;
    config.headers.Policy = `strict-origin-when-cross-origin:*`;
    return config;
});

Vue.prototype.$http = Axios;
