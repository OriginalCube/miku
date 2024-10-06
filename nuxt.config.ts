// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	devtools: { enabled: true },
	srcDir: './client',

	modules: ['@vueuse/nuxt', '@nuxtjs/tailwindcss', '@nuxt/fonts', '@nuxt/icon', 'shadcn-nuxt'],

	shadcn: {
		/**
		 * Prefix for all the imported component
		 */
		prefix: '',
		/**
		 * Directory that the component lives in.
		 * @default "./components/ui"
		 */
		componentDir: './client/components/ui',
	},

	tailwindcss: { cssPath: './assets/css/tailwind.css' },
})
