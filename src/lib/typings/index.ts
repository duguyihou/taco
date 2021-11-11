export interface NewTask {
	content: string
	project_id?: number
}
export interface Task {
	id: string
	content: string
	description: string
	completed: boolean
	order: number
	starred: boolean
	priority: number
	project_id: number
	due: string
	url: string
}

export interface Due {
	date: string
	datetime: string
	recurring: boolean
	string: string
	timezone: string
}
