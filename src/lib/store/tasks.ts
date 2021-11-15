import { add, getAll } from '$lib/api/taskAPI'
import type { NewTask, TasksStore } from '$lib/typings'
import { writable } from 'svelte/store'
import type { Writable } from 'svelte/store'

const initialStore = { isLoading: false, data: [], error: '' }
export const tasks = writable<TasksStore>(initialStore)

export async function fetchAllTasks(): Promise<Writable<TasksStore>> {
	try {
		tasks.set({ ...initialStore, isLoading: true })
		const response = await getAll()
		const { data } = response
		tasks.set({ ...initialStore, data: data.reverse() })
	} catch (error) {
		console.error(error)
		tasks.set({ ...initialStore, error })
	}
	return tasks
}

export async function updateTasksBy(payload: NewTask): Promise<Writable<TasksStore>> {
	try {
		tasks.set({ ...initialStore, isLoading: true })

		const response = await add(payload)
		const { data } = response
		tasks.update((state) => {
			state.data = [data, ...state.data]
			return state
		})
	} catch (error) {
		console.error(error)
		tasks.set({ ...initialStore, error })
	}
	return tasks
}
