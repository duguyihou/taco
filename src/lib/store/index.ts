import type { Store, Todo, List } from '$lib/typings'
import { derived, get, writable } from 'svelte/store'
import { fetchTodosUrl } from '$lib/api/todoAPI'

const initialState = { todos: [], loading: false, error: '' }
export const store = writable<Store>(initialState)
const initialSelectedState = { todos: [], title: '' }
export const selectedStore = writable<{ title: string; todos: Todo[] }>(initialSelectedState)

/**
 * handle star
 * @param payload todo which star
 */
export const handleStar = (payload: Todo): void => {
	store.update((state) => {
		const idx = state.todos.indexOf(payload)
		const newTodo = { ...payload, starred: !payload.starred }
		state.todos.splice(idx, 1, newTodo)
		update(payload.list)
		return state
	})
}
/**
 * handle select
 * @param payload todo which select
 */
export const handleSelect = (payload: Todo): void => {
	store.update((state) => {
		state.todos.forEach((todo) => (todo.selected = false))
		const idx = state.todos.indexOf(payload)
		const newTodo = { ...payload, selected: !payload.selected }
		state.todos.splice(idx, 1, newTodo)
		return state
	})
}
/**
 * handle check
 * @param payload todo which checked
 */
export const handleCheck = (payload: Todo): void => {
	store.update((state) => {
		const idx = state.todos.indexOf(payload)
		const newTodo = { ...payload, checked: !payload.checked }
		state.todos.splice(idx, 1, newTodo)
		update(payload.list)
		console.log(get(selectedStore))
		return state
	})
}
/**
 * update todo list
 * @param payload the list which need update
 */
export const update = (payload?: List): void => {
	const todos = derived(store, (store) => store.todos.filter(({ list }) => list === payload))
	const title = `${payload.toString().charAt(0).toUpperCase()}${payload.toString().slice(1)}`
	document.title = `${title} | Taco`
	selectedStore.update((state) => {
		state.title = title
		state.todos = get(todos)
		return state
	})
}
/**
 * request todos
 * @param method request methos
 * @param url request url
 * @param params params
 */
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
/**
 * fetch todos
 */
export const fetchTodos = request('GET', fetchTodosUrl)
export default store
