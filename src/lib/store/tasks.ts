import { add, close, deleteApi, getAll, getOneBy, reopen, update } from '$lib/api/taskAPI'
import type { NewTask, Task, TasksStore } from '$lib/typings'
import { get, writable } from 'svelte/store'
import type { Writable } from 'svelte/store'

const initialState = { isLoading: false, data: [], selected: null, error: '' }
export const tasks = writable<TasksStore>(initialState)

export async function fetchAllTasks(): Promise<Writable<TasksStore>> {
	try {
		tasks.set({ ...initialState, isLoading: true })
		const response = await getAll()
		const { data } = response
		tasks.set({ ...initialState, data: data.reverse() })
	} catch (error) {
		console.error(error)
		tasks.set({ ...initialState, error })
	}
	return tasks
}

export async function updateTasksBy(payload: NewTask): Promise<Writable<TasksStore>> {
	try {
		const response = await add(payload)
		const { data } = response
		tasks.update((state) => {
			state.data = [data, ...state.data]
			return state
		})
	} catch (error) {
		console.error(error)
		tasks.set({ ...initialState, error })
	}
	return tasks
}

export async function getTaskBy(payload: number): Promise<void> {
	try {
		if (!get(tasks).selected || get(tasks).selected.id !== payload) {
			tasks.set({ ...initialState, isLoading: true })
			const response = await getOneBy(payload)
			const { data } = response
			tasks.set({ ...initialState, selected: data })
		}
	} catch (error) {
		console.error(error)
		tasks.set({ ...initialState, error })
	}
}

export function unselectTask(): void {
	tasks.update((state) => {
		state = { ...state, selected: null }
		return state
	})
}

export function selectTaskBy(payload: number): void {
	unselectTask()
	const task = get(tasks).data.find((task) => task.id === payload)
	tasks.update((state) => {
		state = { ...state, selected: task }
		return state
	})
}

export async function closeTask(payload: Task): Promise<void> {
	try {
		const { id } = payload
		const response = await close(id)
		if (response.status === 204) {
			tasks.update((state) => {
				if (state.selected) state.selected.completed = true
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
				state.selected.completed = false
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

export async function handleStar(payload: Task): Promise<void> {
	try {
		let { priority } = payload
		priority === 1 ? (priority += 1) : (priority -= 1)
		await updateTask(payload.id, { ...payload, priority })
		tasks.update((state) => {
			if (state.selected && state.selected === payload) state.selected.priority = priority
			const idx = state.data.findIndex((task) => task === payload)
			state.data.splice(idx, 1, state.selected)
			return state
		})
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
