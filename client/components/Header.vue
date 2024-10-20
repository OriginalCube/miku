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
			<SheetContent side="right" class="flex flex-col gap-2">
				<SheetHeader class="mt-4 flex flex-row items-center justify-between">
					<NuxtImg :src="account.user.photoURL" class="size-12 rounded-md border border-secondary" />
					<div class="flex flex-col">
						<p class="w-40 overflow-hidden text-ellipsis whitespace-nowrap text-right text-lg font-bold text-primary">
							{{ account.user.name }}
						</p>
						<p class="w-full text-right text-sm text-popover-foreground">
							{{ account.user.role ?? 'Not yet verified' }}
						</p>
					</div>
				</SheetHeader>
				<SheetDescription>
					<Label>Links:</Label>
					<div class="flex flex-col gap-2">
						<template v-if="account.user.role === 'Admin'">
							<HeaderButton
								v-for="link in adminLinks"
								:key="link.label"
								:icon="link.icon"
								:label="link.label"
								:to="link.to"
							/>
						</template>
						<HeaderButton
							v-for="link in navLinks"
							:key="link.label"
							:icon="link.icon"
							:label="link.label"
							:to="link.to"
						/>
					</div>
				</SheetDescription>
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

const navLinks = [
	{ icon: 'tabler:layout-dashboard', label: 'Dashboard', to: '/dashboard' },
	{ icon: 'tabler:address-book', label: 'Trainings', to: '/trainings' },
]

const adminLinks = [
	{ icon: 'tabler:users-group', label: 'Admin', to: '/admin' },
	{ icon: 'tabler:user-cog', label: 'Employees', to: '/employees' },
]
</script>
