
import { createResolver } from "@nuxt/kit";
const { resolve } = createResolver(import.meta.url);

export default defineNuxtConfig({
    // https://github.com/nuxt-themes/alpine
    extends: "@nuxt-themes/typography",

    // Custom components
    components: [{ path: resolve("./components"), global: true }],

    css: ["/assets/main.scss"],

    compatibilityDate: "2024-10-07",
});
