export interface Todo {
	text: string
	list: List
	stared: boolean
}

export enum List {
	Inbox
}

export interface Todos {
	todos: Todo[]
}
