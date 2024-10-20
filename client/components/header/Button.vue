<template>
	<Button variant="link" class="justify-start" @click="() => navigateTo(to)">
		<Icon :name="icon" class="mr-2 size-4" />
		<span>{{ label }}</span>
	</Button>
</template>

<script setup lang="ts">
defineProps<{
	icon: string
	label: string
	to: string
}>()
</script>
