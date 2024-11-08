// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
  build: {
    transpile: ["vuetify"],
  },

  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    "@nuxt/image",
  ],

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

  devtools: { enabled: false },
  compatibilityDate: "2024-11-06",
  css: ["vuetify/styles", "@/assets/css/main.css"],
  imports: {
    dirs: ["composables/**", "types/**"], // Adjusted to include nested directories
  },
});
