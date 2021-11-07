export interface Todo {
	id: string
	text: string
	list: List
	starred: boolean
	checked: boolean
	selected: boolean
}

export enum List {
	Inbox = 'inbox',
	Today = 'today',
	Week = 'week'
}

export interface Todos {
	todos: Todo[]
}

export interface Store {
	todos: Todo[]
	loading: boolean
	error: string
}
