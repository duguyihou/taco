import { add, getAll } from '$lib/api/taskAPI'
import type { NewTask, Task } from '$lib/typings'
import { writable } from 'svelte/store'

export const tasks = writable<Task[]>([])

export async function fetchAllTasks(): Promise<void> {
	try {
		const response = await getAll()
		const { data } = response
		tasks.set(data.reverse())
	} catch (error) {
		console.error(error)
	}
}

export async function updateTasksBy(payload: NewTask): Promise<void> {
	try {
		const response = await add(payload)
		const { data } = response
		tasks.update((state) => {
			state = [data, ...state]
			return state
		})
	} catch (error) {
		console.error(error)
	}
}
