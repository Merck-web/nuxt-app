import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      title: "landing",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "" },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      script: [
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/gsap.min.js",
        },
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/Draggable.min.js",
        },
        {
          src: "./assets/js/InertiaPlugin.min.js",
        },
      ],
    },
  },

  css: [
    "~/assets/css/index.scss",
    // 'vue-slick-carousel/dist/vue-slick-carousel.css',
  ],

  plugins: [],

  buildModules: [
    // '@nuxtjs/tailwindcss',
  ],

  modules: [
    // '@nuxtjs/axios'
    // '@nuxtjs/pwa',
  ],

  build: {
    transpile: [
      ["gsap"],
      // 'vue-carousel'
    ],
    loaders: {
      vue: {
        compilerOptions: {
          // This option is highly recommended
          preserveWhitespace: false,
        },
      },
    },
  },
});
