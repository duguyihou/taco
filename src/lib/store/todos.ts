import type { Todo } from '$lib/typings'

import { writable } from 'svelte/store'
export const todos = writable<Todo[]>([])
