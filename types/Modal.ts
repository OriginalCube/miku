export interface Form {
	title: string
	fields: Field[]
	action: () => void
}

export interface Field {
	name: string
	label: string
	type: 'textField' | 'textArea'
	attr?: {
		type?: string
	}
	rule: any
}
