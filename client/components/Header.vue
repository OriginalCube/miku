<template>
	<div class="flex h-16 w-full items-center justify-between px-4">
		<div class="flex items-center justify-center gap-2 text-xl text-primary">
			<Icon name="tabler:align-box-left-top" class="size-8" />
			<p class="font-bold">Miku</p>
		</div>

		<!--Mobile-->
		<Sheet>
			<SheetTrigger as-child>
				<Button size="icon" variant="link">
					<Icon name="tabler:menu-2" class="size-8" />
				</Button>
			</SheetTrigger>
			<SheetContent side="right">
				<SheetHeader>
					{{ account.user }}
				</SheetHeader>
				<SheetFooter>
					<Button variant="outline" @click="() => signOut(auth)">Sign Out</Button>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	</div>
</template>

<script setup lang="ts">
import { signOut } from '@firebase/auth'
const auth = useFirebaseAuth()
const account = useUserStore()
</script>
