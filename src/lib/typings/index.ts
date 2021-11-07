export interface Todo {
	id: string
	text: string
	list: List
	starred: boolean
	checked: boolean
	selected: boolean
}

export enum List {
	Inbox = 1,
	Starred = 2,
	All = Inbox | Starred
}

export interface Todos {
	todos: Todo[]
}

export interface Store {
	todos: Todo[]
	loading: boolean
	error: string
}
