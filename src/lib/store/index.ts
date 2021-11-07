import type { List, Store, Todo } from '$lib/typings'
import { writable } from 'svelte/store'
import { fetchTodosUrl } from '$lib/api/todoAPI'

const initialState = { todos: [], loading: false, error: '' }
export const store = writable<Store>(initialState)

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
		console.log(newTodo.text)
		state.todos.splice(idx, 1, newTodo)
		console.log(state.todos.map((todo) => todo.checked))
		return state
	})
}

export const handleList = (payload: List): void => {
	console.log(payload)
}

const request = async (method: string, url: string, params?: never): Promise<void> => {
	store.update((state) => ({ ...state, loading: true }))
	try {
		const headers = { 'Content-type': 'application/json' }
		const body = params ? JSON.stringify(params) : undefined
		const response = await fetch(url, { method, body, headers })
		const json = await response.json()
		if (response.ok) {
			store.set(json)
		} else {
			store.update((state) => ({ ...state, error: json.errors }))
		}
	} catch (e) {
		console.log(e)
	}
}

export const fetchTodos = request('GET', fetchTodosUrl)
export default store
