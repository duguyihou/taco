export interface Todo {
	text: string
	list: List
	starred: boolean
}

export enum List {
	Inbox
}

export interface Todos {
	todos: Todo[]
}
