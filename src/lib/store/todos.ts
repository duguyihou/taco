import type { Todo } from '$lib/typings'
import todoData from '../../static/todoData.json'

import { writable, derived } from 'svelte/store'
export const todos = writable<Todo[]>(todoData)
export const todoIds = derived(todos, ($todos) => $todos.map(({ id }) => id))
