import { add, close, deleteApi, getAll, getOneBy, reopen, update } from '$lib/api/taskAPI'
import type { NewTask, Task, TasksStore, UpdateTask } from '$lib/typings'
import { get, writable } from 'svelte/store'
import type { Writable } from 'svelte/store'
import { debounce } from 'lodash-es'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime.js'

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

export const updateTasksBy = debounce(async (payload: NewTask): Promise<Writable<TasksStore>> => {
	try {
		console.log(payload)
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
}, 1000)

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
				if (state.selected && state.selected === payload) state.selected.completed = true
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
				if (state.selected && state.selected === payload) state.selected.completed = false
				state.data = [payload, ...state.data]
				return state
			})
		}
	} catch (error) {
		console.error(error)
	}
}

export async function deleteTask(payload: Task): Promise<void> {
	try {
		const { id } = payload
		const response = await deleteApi(id)
		if (response.status === 204) {
			tasks.update((state) => {
				state.data = state.data.filter((task) => task.id !== id)
				state.selected = null
				return state
			})
		}
	} catch (error) {
		console.error(error)
	}
}

export const updateContent = debounce((payload: Task): void => {
	const { id } = payload
	tasks.update((state) => {
		const idx = state.data.findIndex((task) => task.id === id)
		state.data.splice(idx, 1, payload)
		return state
	})
}, 1000)

export async function updateTask(id: number, payload: UpdateTask): Promise<void> {
	try {
		const response = await update(id, payload)
		if (response.status === 204) {
			console.log('update task successfully')
		}
	} catch (error) {
		console.error(error)
	}
}

export async function handleStar(id: number, priority: number): Promise<void> {
	try {
		priority === 1 ? (priority += 1) : (priority -= 1)
		await updateTask(id, { priority })
		tasks.update((state) => {
			if (state.selected && state.selected.id === id) {
				state.selected.priority = priority
				const idx = state.data.findIndex((task) => task.id === id)
				const oldTask = state.data.find((task) => task.id === id)
				state.data.splice(idx, 1, { ...oldTask, priority })
				return state
			} else {
				const idx = state.data.findIndex((task) => task.id === id)
				const oldTask = state.data.find((task) => task.id === id)
				state.data.splice(idx, 1, { ...oldTask, priority })
				return state
			}
		})
	} catch (error) {
		console.error(error)
	}
}

export const updateDue = async (id: number, date: string): Promise<void> => {
	dayjs.extend(relativeTime)
	const due = {
		date: dayjs(date).format('YYYY-MM-DD'),
		string: dayjs(date).fromNow(),
		recurring: false
	}
	await updateTask(id, { due_date: dayjs(date).format('YYYY-MM-DD') })
	tasks.update((state) => {
		state.selected.due = due
		const idx = state.data.findIndex((task) => task.id === id)
		const oldTask = state.data.find((task) => task.id === id)
		state.data.splice(idx, 1, { ...oldTask, due })
		return state
	})
}
