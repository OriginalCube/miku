<template>
	<form class="flex h-auto w-full flex-col gap-2" @submit="onSubmit">
		<Label class="text-2xl text-primary">{{ data.title }}</Label>
		<span class="w-full border-b border-primary"></span>

		<div class="flex max-h-[600px] w-full flex-col gap-2 overflow-y-auto">
			<!--Form input -->
			<template v-for="(field, index) in data.fields" :key="index">
				<FormField v-slot="{ componentField }" :name="field.name">
					<FormItem>
						<FormLabel>{{ field.label }}</FormLabel>
						<FormControl>
							<Input
								v-if="field.type === 'textField'"
								v-model="formData[field.name]"
								v-bind="componentField"
								:type="field?.attr?.type"
							/>
							<Textarea v-if="field.type === 'textArea'" v-model="formData[field.name]" v-bind="componentField" />
						</FormControl>
						<FormMessage />
					</FormItem>
				</FormField>
			</template>
		</div>

		<span class="mt-2 w-full border-b border-primary"></span>
		<div class="flex w-full items-center gap-2">
			<Button class="w-full" type="reset" variant="secondary" @click="() => closeModal()">Cancel</Button>
			<Button class="w-full hover:text-primary" type="submit">Submit</Button>
		</div>
	</form>
</template>

<script setup lang="ts">
import type { Form } from '~~/types/Modal'
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { z } from 'zod'
const props = defineProps<{ data: Form }>()

const { closeModal, callback } = useModalStore()

const formData = reactive<Record<string, any>>({})

const formSchema = computed(() => {
	const schemaObj = props.data.fields.reduce(
		(acc, field) => ({
			...acc,
			...field.rule,
		}),
		{},
	)
	// Convert Zod schema to vee-validate compatible validator
	return toTypedSchema(z.object(schemaObj))
})

const { handleSubmit } = useForm({
	validationSchema: formSchema.value,
})

const onSubmit = handleSubmit((values) => {
	if (callback) callback(values)
})
</script>
