<template>
	<Dialog v-if="useModalStore().modal" open>
		<DialogTitle></DialogTitle>
		<DialogContent>
			<DialogDescription>
				<component :is="component" :data="modalStore.data" />
			</DialogDescription>
		</DialogContent>
	</Dialog>
</template>

<script setup lang="ts">
const modalStore = useModalStore()
const component = computed(() => defineAsyncComponent(() => import('~/components/modal/Form.vue')))
</script>
