import { get, writable } from 'svelte/store'
import type { Task } from '$lib/typings'
import { getOneBy } from '$lib/api/taskAPI'

export const selectedTask = writable<Task | null>(null)

export async function selectTaskBy(payload: number): Promise<void> {
	if (!get(selectedTask) || get(selectedTask).id !== payload) {
		const response = await getOneBy(payload)
		selectedTask.set(response)
	}
}