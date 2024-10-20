<template>
	<div class="flex flex-col gap-4 px-4">
		<div class="flex justify-between gap-2 md:justify-start">
			<Badge>
				<span>Number of Trainings #0</span>
			</Badge>

			<Badge>
				<span>Number of Employees #0</span>
			</Badge>
		</div>
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
	},
	{
		name: 'description',
		label: 'Description',
		type: 'textArea',
	},
	{
		name: 'startDate',
		label: 'Start Date',
		type: 'textField',
		attr: {
			type: 'date',
		},
	},
	{
		name: 'endDate',
		label: 'End Date',
		type: 'textField',
		attr: {
			type: 'date',
		},
	},
	{
		name: 'max',
		label: 'Maximum Participants',
		type: 'textField',
		attr: {
			type: 'number',
		},
	},
]
</script>
