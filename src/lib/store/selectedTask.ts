import { get, writable } from 'svelte/store'
import type { Task } from '$lib/typings'
import { close, getOneBy, reopen, update } from '$lib/api/taskAPI'
import { tasks } from './tasks'

export const selectedTask = writable<Task | null>(null)

export async function selectTaskBy(payload: number): Promise<void> {
	try {
		if (!get(selectedTask) || get(selectedTask).id !== payload) {
			const response = await getOneBy(payload)
			const { data } = response
			selectedTask.set(data)
		}
	} catch (error) {
		console.error(error)
	}
}

export async function closeTask(payload: Task): Promise<void> {
	try {
		const { id } = payload
		const response = await close(id)
		if (response.status === 204) {
			tasks.update((state) => {
				state = state.filter((task) => task.id !== id)
				return state
			})
		}
	} catch (error) {
		console.error(error)
	}
}

export async function reopenTask(payload: Task): Promise<void> {
	try {
		const { id } = payload
		const response = await reopen(id)
		if (response.status === 204) {
			tasks.update((state) => {
				state = [payload, ...state]
				return state
			})
		}
	} catch (error) {
		console.error(error)
	}
}
export async function updateTask(id: number, payload: Task): Promise<void> {
	try {
		const response = await update(id, payload)
		if (response.status === 204) {
			console.log('need update task')
		}
	} catch (error) {
		console.error(error)
	}
}
