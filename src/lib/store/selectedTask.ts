import { get, writable } from 'svelte/store'
import type { Task, TaskStore } from '$lib/typings'
import { close, deleteApi, getOneBy, reopen, update } from '$lib/api/taskAPI'
import { tasks } from './tasks'

const initialState = { isLoading: false, data: null, error: '' }
export const selectedTask = writable<TaskStore>(initialState)

export async function getTaskBy(payload: number): Promise<void> {
	try {
		if (!get(selectedTask) || get(selectedTask).data.id !== payload) {
			selectedTask.set({ ...initialState, isLoading: true })
			const response = await getOneBy(payload)
			const { data } = response
			selectedTask.set({ ...initialState, data })
		}
	} catch (error) {
		console.error(error)
		selectedTask.set({ ...initialState, error })
	}
}

export function selectTaskBy(payload: number): void {
	unselectTask()
	const task = get(tasks).data.find((task) => task.id === payload)
	console.log(get(selectedTask))
	selectedTask.set({ ...initialState, data: task })
}

export function unselectTask(): void {
	selectedTask.set({ ...initialState, data: null })
}

export async function closeTask(payload: Task): Promise<void> {
	try {
		const { id } = payload
		const response = await close(id)
		if (response.status === 204) {
			tasks.update((state) => {
				state.data = state.data.filter((task) => task.id !== id)
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
				state.data = [payload, ...state.data]
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
				state.data = state.data.filter((task) => task.id !== payload)
				return state
			})
		}
	} catch (error) {
		console.error(error)
	}
}
