import type { TodoList } from '$lib/typings'
import todoData from '../../static/todoData.json'

import { writable } from 'svelte/store'
export const todoList = writable<TodoList>(todoData)
