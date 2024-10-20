// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	devtools: { enabled: true },
	srcDir: './client',

	imports: { dirs: ['./stores', './composables/*/*.{ts,js}'] },
	modules: [
		'@vueuse/nuxt',
		'@nuxtjs/tailwindcss',
		'@nuxt/fonts',
		'@nuxt/icon',
		'shadcn-nuxt',
		'nuxt-vuefire',
		'@pinia/nuxt',
		'@nuxt/image',
		'@nuxtjs/device',
	],
	// For easy configuration for Firebase
	ssr: false,

	pinia: {
		storesDirs: ['./client/stores/**'],
	},

	vuefire: {
		auth: { enabled: true },
		config: {
			apiKey: import.meta.env.APIKEY,
			authDomain: import.meta.env.AUTHDOMAIN,
			projectId: import.meta.env.PROJECTID,
			storageBucket: import.meta.env.STORAGEBUCKET,
			messagingSenderId: import.meta.env.MESSAGINGSENDERID,
			appId: import.meta.env.APPID,
			measurementId: import.meta.env.MEASUREMENTID,
		},
	},

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
