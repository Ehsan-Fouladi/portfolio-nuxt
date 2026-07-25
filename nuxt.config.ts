const isDevelopment = process.env.NODE_ENV === "development" ? true : false;

export default defineNuxtConfig({
  experimental: {
    noVueServer: true,
  },

  features: {
    inlineStyles: true,
  },

  modules: [
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxt/content",
    "@vueuse/nuxt",
    "nuxt-og-image",
    "motion-v/nuxt",
  ],

  devtools: {
    enabled: isDevelopment,
  },

  css: ["~/assets/css/main.css"],

  vite: {
    build: {
      target: "esnext",
      minify: "terser",
      cssMinify: true,
      cssCodeSplit: true,
      sourcemap: isDevelopment,
      terserOptions: {
        compress: {
          drop_console: !isDevelopment,
          drop_debugger: true,
        },
      },
    },
  },

  app: {
    baseURL: "/portfolio-nuxt/",
    head: {
      meta: [
        { name: "charset", content: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      htmlAttrs: {
        dir: "rtl",
        lang: "fa",
        translate: "no",
      },
    },
  },

  content: {
    experimental: {
      sqliteConnector: "native",
    },
  },

  compatibilityDate: "2026-06-30",

  nitro: {
    prerender: {
      routes: ["/"],
      crawlLinks: true,
    },
  },

  ui: {
    fonts: false,
  },

  ogImage: {
    zeroRuntime: true,
  },
});
