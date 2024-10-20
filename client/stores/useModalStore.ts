export const useModalStore = defineStore('modal', {
	state: () => ({
		modal: false,
		type: 'form',
		data: {},
		callback: null,
	}),
	actions: {
		setModal(type: string, data: any, callback?: any) {
			this.modal = true
			this.type = type
			this.data = data
			this.callback = callback
		},
		closeModal() {
			this.modal = false
			this.data = {}
		},
	},
})
