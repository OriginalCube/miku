// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	devtools: { enabled: true },
	srcDir: './client',

	modules: ['@vueuse/nuxt', '@nuxtjs/tailwindcss', '@nuxt/fonts', '@nuxt/icon'],
})