import { todos } from '$lib/store/todos'
import type { Todo } from '$lib/typings'
import { get } from 'svelte/store'

const todoList = get(todos)

const updateTodos = (todo, payload) => {
	const idx = todoList.todos.indexOf(todo)
	todoList.todos.splice(idx, 1, payload)
	todos.set(todoList)
}
export const handleStar = (id: string, starred: boolean): void => {
	const todo = todoList.todos.find((todo) => todo.id === id)
	const newTodo = { ...todo, starred: !starred }
	updateTodos(todo, newTodo)
}

export const handleSelect = (todo: Todo): void => {
	todoList.todos.forEach((todo) => (todo.selected = false))
	todos.set(todoList)
	const newTodo = { ...todo, selected: true }
	updateTodos(todo, newTodo)
}

export const handleCheck = (todo: Todo, checked: boolean): void => {
	const newTodo = { ...todo, checked: !checked }

	updateTodos(todo, newTodo)
	console.log(newTodo)
}
