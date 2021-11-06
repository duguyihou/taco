import type { Todos, Todo } from '$lib/typings'
import todoData from '../../static/todoData.json'

import { writable } from 'svelte/store'
const initialState = todoData
export const store = writable<Todos>(initialState)

export const handleStar = (payload: Todo): void => {
	store.update((state) => {
		const idx = state.todos.indexOf(payload)
		const newTodo = { ...payload, starred: !payload.starred }
		state.todos.splice(idx, 1, newTodo)
		return state
	})
}

export const handleSelect = (payload: Todo): void => {
	store.update((state) => {
		state.todos.forEach((todo) => (todo.selected = false))
		const idx = state.todos.indexOf(payload)
		const newTodo = { ...payload, selected: !payload.selected }
		state.todos.splice(idx, 1, newTodo)
		return state
	})
}

export const handleCheck = (payload: Todo): void => {
	store.update((state) => {
		const idx = state.todos.indexOf(payload)
		const newTodo = { ...payload, checked: !payload.checked }
		state.todos.splice(idx, 1, newTodo)
		return state
	})
}

export default store
