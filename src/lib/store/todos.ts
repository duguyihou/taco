import type { Todos } from '$lib/typings'
import todoData from '../../static/todoData.json'

import { writable } from 'svelte/store'
export const todos = writable<Todos>(todoData)
