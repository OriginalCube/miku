import type { User } from '~~/types/User'
import { doc, getDoc } from '@firebase/firestore'

export default defineNuxtRouteMiddleware(async (to) => {
	const user = useCurrentUser()

	watch(user, async () => {
		// Get user data from Firestore
		if (!useUserStore().getUser.uid) {
			const db = useFirestore()
			const userRef = doc(db, 'users', user.value?.uid)
			const getInfo = await getDoc<User>(userRef)
			const userData = getInfo.data()
			if (userData) {
				useUserStore().setUser({
					uid: userData.uid,
					photoURL: userData.photoURL,
					role: userData.role,
					name: userData.name,
					date: userData.date,
					email: userData.email,
				})
			}
		}

		// if (user.value?.role !== 'admin' && to.path === '/admin') return navigateTo('/')

		// Redirect to dashboard if user is logged in
		if (user.value && to.path === '/') {
			return navigateTo('/dashboard')
		} else if (!user.value && to.path !== '/') {
			return navigateTo('/')
		}
	})
})
