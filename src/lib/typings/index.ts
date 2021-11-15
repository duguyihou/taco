export interface NewTask {
	content: string
	project_id?: number
}
export interface Task {
	id: number
	content: string
	description: string
	completed: boolean
	order: number
	starred: boolean
	priority: number
	project_id: number
	due: Due
	url: string
}

export interface Due {
	date: string
	datetime: string
	recurring: boolean
	string: string
	timezone?: string
}

export interface TasksStore {
	isLoading: boolean
	data: Task[]
	error: string
}
