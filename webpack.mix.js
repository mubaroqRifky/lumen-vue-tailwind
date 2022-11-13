let mix = require("laravel-mix");

mix.webpackConfig({
    resolve: {
        alias: {
            "@": "..",
        },
    },
});

mix.options({
    globalVueStyles: `resources/scss/_variables.scss`,
});

mix.js("resources/js/app.js", "public/js")
    .sass("resources/scss/app.scss", "public/css")
    .postCss("resources/css/style.css", "public/css", [require("tailwindcss")])
    .setPublicPath("public");
