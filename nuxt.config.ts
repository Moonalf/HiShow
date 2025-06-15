// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width,initial-scale=1",
      title: "Hi, Show!",
      meta: [{ name: "discription", content: "" }],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/hishow.ico" },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css",
        },
      ],
    },
    baseURL: "/HiShow/",
  },
  modules: ["@element-plus/nuxt", "@nuxtjs/tailwindcss"],
  nitro: {
    output: {
      publicDir: ".output/HiShow",
    },
  },
});
