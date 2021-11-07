export interface Todo {
	id: string
	text: string
	list: List
	starred: boolean
	checked: boolean
	selected: boolean
	due?: string
}

export enum List {
	Inbox = 'Inbox',
	Today = 'Today',
	Week = 'Week'
}

export interface Todos {
	todos: Todo[]
}

export interface Store {
	todos: Todo[]
	loading: boolean
	error: string
}
