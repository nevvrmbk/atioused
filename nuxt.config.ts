// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      meta: [
        { name: "author", content: "Networkant" },
        { name: "description", content: "My amazing site." },
        { "http-equiv": "x-ua-compatible", content: "IE=edge" },
      ],
      link: [
        { href: "/manifest.json", type: "application/json", rel: "manifest" },
      ],
    },
  },
});
