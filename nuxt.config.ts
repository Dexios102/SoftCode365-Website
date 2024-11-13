import { defineNuxtConfig } from 'nuxt/config';
import { primaryTheme, vuetifyDefaults } from "./vuetify.options";

export default defineNuxtConfig({
  modules: [
    'vuetify-nuxt-module',
    "@nuxt/image",
  ],

  vuetify: {
    vuetifyOptions: {
      theme: {
        themes: {
          light: primaryTheme,
        },
      },
      defaults: vuetifyDefaults,
    },
  },

  devtools: { enabled: false },
  compatibilityDate: "2024-11-06",
  css: ["vuetify/styles", "@/assets/css/main.css"],
  imports: {
    dirs: ["composables/**", "types/**"],
  },
});
