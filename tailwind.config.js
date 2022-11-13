module.exports = {
    purge: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    darkMode: false,
    theme: {
        colors: {
            primary: "#138968",
            secondary: "#E1F4EF",
            danger: "#DE4848",
            warning: "#FE9345",
            success: "#48ABDE",
            "green-light": "#2EAF8B",
            "gray-dark": "#273444",
            gray: "#8492a6",
            "gray-light": "#d3dce6",
        },
        fontFamily: {
            sans: ["Open Sans", "sans-serif"],
        },
        extend: {
            spacing: {
                "8xl": "96rem",
                "9xl": "128rem",
            },
            borderRadius: {
                "4xl": "2rem",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
