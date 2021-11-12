import { add, getAll } from '$lib/api/taskAPI'
import type { NewTask, Task } from '$lib/typings'
import { writable } from 'svelte/store'

export const tasks = writable<Task[]>([])

export async function fetchAllTasks(): Promise<void> {
	const response = await getAll()
	tasks.set(response)
}

export async function updateTasksBy(payload: NewTask): Promise<void> {
	const response = await add(payload)
	tasks.update((state) => {
		state = [response, ...state]
		return state
	})
}
