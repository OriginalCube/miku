export interface User {
	uid: string
	email: string
	name: string
	photoURL: string
	role?: 'admin' | 'employee'
	date: Date | string
}
