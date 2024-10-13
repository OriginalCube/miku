import type { User } from '~~/types/User'

export const useUserStore = defineStore('user', {
	state: () => ({
		user: {
			uid: '',
			email: '',
			name: '',
			photoURL: '',
			role: '',
			date: '',
		},
	}),
	getters: {
		getUser: (state) => state.user,
	},
	actions: {
		setUser(user: User) {
			this.user = user
		},
	},
})
