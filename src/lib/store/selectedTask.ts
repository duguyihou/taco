import { get, writable } from 'svelte/store'
import type { Task } from '$lib/typings'
import { close, deleteApi, getOneBy, reopen, update } from '$lib/api/taskAPI'
import { tasks } from './tasks'

export const selectedTask = writable<Task | null>(null)

export async function getTaskBy(payload: number): Promise<void> {
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

export function selectTaskBy(payload: number): void {
	unselectTask()
	const task = get(tasks).find((task) => task.id === payload)
	selectedTask.set(task)
}

export function unselectTask(): void {
	if (get(selectedTask)) selectedTask.set(null)
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
			console.log('update task successfully')
		}
	} catch (error) {
		console.error(error)
	}
}

export async function deleteTask(payload: number): Promise<void> {
	try {
		const response = await deleteApi(payload)
		if (response.status === 204) {
			tasks.update((state) => {
				state = state.filter((task) => task.id === payload)
				return state
			})
		}
	} catch (error) {
		console.error(error)
	}
}
