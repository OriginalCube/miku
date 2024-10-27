<template>
	<div class="flex flex-col gap-4 px-4">
		<Card class="p-2">
			<CardTitle class="flex items-center justify-between">
				<span>Trainings</span>
				<div class="flex gap-4">
					<Button
						variant="link"
						@click="
							() =>
								setModal(
									'form',
									{
										title: 'Create Training',
										fields,
										schemaObj,
									},
									createTrainings,
								)
						"
					>
						<Icon name="tabler:plus" class="size-6 text-teal-400" />
					</Button>
					<Button variant="link">
						<Icon name="tabler:refresh" class="size-6 text-blue-400" />
					</Button>
				</div>
			</CardTitle>
			<CardDescription>
				<ScrollArea class="h-auto max-h-32 w-full"> </ScrollArea>
			</CardDescription>
		</Card>
	</div>
</template>

<script setup lang="ts">
import type { Field } from '~~/types/Modal'
import { collection, doc, setDoc } from '@firebase/firestore'
import { z } from 'zod'

const { setModal } = useModalStore()
const createTrainings = async (input) => {
	const db = useFirestore()
	try {
		const trainingRef = doc(collection(db, 'trainings'))
		await setDoc(trainingRef, input)
	} catch (e) {
		console.error(e)
	}
}

const fields: Field[] = [
	{
		name: 'name',
		label: 'Name',
		type: 'textField',
		rule: {
			name: z.string().min(1),
		},
	},
	{
		name: 'description',
		label: 'Description',
		type: 'textArea',
		rule: {
			description: z.string().min(1),
		},
	},
	{
		name: 'startDate',
		label: 'Start Date',
		type: 'textField',
		attr: {
			type: 'date',
		},
		rule: {
			startDate: z.string().min(1),
		},
	},
	{
		name: 'endDate',
		label: 'End Date',
		type: 'textField',
		attr: {
			type: 'date',
		},
		rule: {
			endDate: z.string().min(1),
		},
	},
	{
		name: 'max',
		label: 'Maximum Participants',
		type: 'textField',
		attr: {
			type: 'number',
		},
		rule: {
			max: z.number().min(1),
		},
	},
	{
		name: 'link',
		label: 'Training Link',
		type: 'textField',
		rule: {
			link: z.string().min(1),
		},
	},
]
</script>
