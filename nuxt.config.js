import colors from "vuetify/es5/util/colors";

export default {
    mode: "universal",
    /*
     ** Headers of the page
     */
    head: {
        titleTemplate: "%s - " + process.env.npm_package_name,
        title: process.env.npm_package_name || "",
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            {
                hid: "description",
                name: "description",
                content: process.env.npm_package_description || ""
            }
        ],
        link: [
            { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
            {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css2?family=Inter:wght@200&display=swap"
            },
            { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
            {
                rel: "stylesheet",
                href: "https://use.fontawesome.com/releases/v5.0.13/css/all.css"
            }
        ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: "success" },
    /*
     ** Global CSS
     */
    css: ["~assets/styles/main.css"],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: ["@nuxtjs/vuetify"],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        "@nuxtjs/axios", [
            "nuxt-gmaps",
            {
                key: "AIzaSyB45-ufkKg86KIq5z5MjFA2Hs1eNmVKR9U"
                    //you can use libraries: ['places']
            }
        ],
        "nuxt-moment"
    ],
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {},
    /*
     ** vuetify module configuration
     ** https://github.com/nuxt-community/vuetify-module
     */
    transition: {
        name: "fade",
        mode: "out-in"
    },
    vuetify: {
        // customVariables: ["~/assets/variables.scss"],
        theme: {
            dark: true,
            themes: {
                dark: {
                    primary: colors.blue.darken2,
                    accent: colors.grey.darken3,
                    secondary: colors.amber.darken3,
                    info: colors.teal.lighten1,
                    warning: colors.amber.base,
                    error: colors.deepOrange.accent4,
                    success: colors.green.accent3
                }
            }
        }
    },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    }
};