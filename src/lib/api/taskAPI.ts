import type { NewTask, Task } from '$lib/typings'
import api from '$lib/utils/api'

export const add = async (payload: NewTask): Promise<Task> => {
	try {
		const task = await api.post('/tasks', payload)
		return task
	} catch (error) {
		console.error(error)
	}
}
