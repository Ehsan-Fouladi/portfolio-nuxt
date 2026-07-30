const isDevelopment = process.env.NODE_ENV === "development" ? true : false;

export default defineNuxtConfig({
  compatibilityDate: "2026-06-30",

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
    baseURL: "/",
    head: {
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

  nitro: {
    prerender: {
      routes: ["/"],
      crawlLinks: true,
    },
  },

  icon: {
    clientBundle: {
      scan: true,
      icons: [
        "lucide:check-circle",
        "lucide:chevron-right",
        "lucide:plus",
        "lucide:arrow-left",
        "lucide:external-link",
        "simple-icons:github",
        "simple-icons:linkedin",
        "simple-icons:telegram",
        "simple-icons:gmail",
      ],
    },
  },

  ui: {
    fonts: false,
  },

  ogImage: {
    zeroRuntime: true,
  },
});
