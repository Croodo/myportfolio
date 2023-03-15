export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  modules: ['nuxt-icon', ],
  //      plugins: [
  //   { src: "~/plugins/particles" , mode: 'client'}
  // ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
