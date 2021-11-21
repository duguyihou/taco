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

export interface UpdateTask {
	content?: string
	description?: string
	order?: number
	priority?: number
	label_ids?: number[]
	due_date?: string
	due_string?: string
	due_datetime?: string
}
export interface Due {
	string: string
	date: string
	recurring: boolean
	datetime?: string
	timezone?: string
}

export interface TasksStore {
	isLoading: boolean
	data: Task[]
	error: string
	selected: Task
}
