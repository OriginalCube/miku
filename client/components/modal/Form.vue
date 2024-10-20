<template>
	<div class="flex h-auto w-full flex-col gap-2">
		<Label class="text-2xl text-primary">{{ data.title }}</Label>
		<span class="w-full border-b border-primary"></span>

		<div class="flex flex-col gap-4">
			<template v-for="(field, index) in data.fields">
				<template v-if="field.type === 'textField'">
					<div :key="index">
						<Label class="mb-0.5 pl-0.5">{{ field.label }}</Label>
						<Input v-model="formData[field.name]" />
					</div>
				</template>

				<template v-if="field.type === 'textArea'">
					<div :key="index">
						<Label class="mb-0.5 pl-0.5">{{ field.label }}</Label>
						<Textarea v-model="formData[field.name]" />
					</div>
				</template>
			</template>
		</div>
		<span class="mt-2 w-full border-b border-primary"></span>
		<div class="flex w-full items-center gap-2">
			<Button class="w-full" variant="secondary" @click="() => closeModal()">Cancel</Button>
			<Button class="w-full" @click="() => callback(formData)">Submit</Button>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { Form } from '~~/types/Modal'
defineProps<{ data: Form }>()

const { closeModal, callback } = useModalStore()

const formData = reactive({})
</script>
