import { get, writable } from 'svelte/store'
import type { Task } from '$lib/typings'
import { close, getOneBy, update } from '$lib/api/taskAPI'

export const selectedTask = writable<Task | null>(null)

export async function selectTaskBy(payload: number): Promise<void> {
	if (!get(selectedTask) || get(selectedTask).id !== payload) {
		const response = await getOneBy(payload)
		selectedTask.set(response)
	}
}

// export async function close(payload: Task): Promise<void> {
// 	const { id } = payload
// 	await close(id)
// }
export async function updateTask(id: number, payload: Task): Promise<void> {
	await update(id, payload)
}
