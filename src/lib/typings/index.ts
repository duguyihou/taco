export interface NewTask {
	content: string
	project_id?: number
}
export interface Task {
	id: number
	content: string
	description?: string
	project_id?: number
	parent_id?: number
	order?: number
	priority?: number
	completed: boolean
	due_string?: string
	due_date?: string
	due_datetime?: string
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
	today?: Task[]
	future?: Task[]
}
