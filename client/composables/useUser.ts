import type { User } from '~~/types/User'
import { doc, setDoc, Timestamp } from '@firebase/firestore'

export default () => {
	const saveUser = async (user: User) => {
		const db = useFirestore()
		try {
			const { uid, email, displayName, photoURL } = user
			const userRef = doc(db, 'users', uid) // Reference to a document
			await setDoc(
				userRef,
				{
					uid,
					name: displayName,
					email,
					photoURL,
					updatedAt: Timestamp.now(),
				},
				{ merge: true },
			)
		} catch (e) {
			console.error(e)
		}
	}

	return { saveUser }
}
