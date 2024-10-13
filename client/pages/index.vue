<template>
	<div class="flex min-h-screen w-full flex-col items-center justify-center gap-4 bg-background">
		<Label class="text-4xl font-bold text-primary">Miku</Label>
		<p class="w-10/12 text-center text-sm">Track, Train, Develop, and Manage your progress with ease.</p>
		<Button
			class="w-10/12 border hover:border-primary hover:bg-secondary hover:text-primary md:w-[400px]"
			@click="signIn"
			>Sign In</Button
		>
	</div>
</template>

<script setup lang="ts">
import { GoogleAuthProvider, signInWithPopup } from '@firebase/auth'

const { saveUser } = useUser()
definePageMeta({
	layout: 'blank',
})
const auth = useFirebaseAuth()

const signIn = async () => {
	const result = await signInWithPopup(auth, new GoogleAuthProvider())
	saveUser(result.user)
}
</script>
