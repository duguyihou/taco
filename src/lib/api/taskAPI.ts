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

export const getAll = async (): Promise<Task[]> => {
	try {
		const tasks = (await api.get('/tasks')) as unknown as Task[]
		return tasks.reverse()
	} catch (error) {
		console.error(error)
	}
}

export const getOneBy = async (payload: number): Promise<Task> => {
	try {
		const task = (await api.get(`/tasks/${payload}`)) as unknown as Task
		console.log(task)
		return task
	} catch (error) {
		console.error(error)
	}
}
