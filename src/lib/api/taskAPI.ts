import type { NewTask, Task } from '$lib/typings'
import request from '$lib/utils/request'
import type { AxiosResponse } from 'axios'

export const add = (data: NewTask): Promise<AxiosResponse<Task, unknown>> =>
	request({ method: 'POST', url: '/tasks', data })

export const getAll = (): Promise<AxiosResponse<Task[], unknown>> =>
	request({ method: 'GET', url: '/tasks' })

export const getOneBy = (id: number): Promise<AxiosResponse<Task, unknown>> =>
	request({ method: 'GET', url: `/tasks/${id}` })

export const close = (id: number): Promise<AxiosResponse<unknown, unknown>> =>
	request({ method: 'POST', url: `/tasks/${id}/close` })

export const reopen = (id: number): Promise<AxiosResponse<unknown, unknown>> =>
	request({ method: 'POST', url: `/tasks/${id}/reopen` })

export const update = (id: number, data: Task): Promise<AxiosResponse<unknown, unknown>> =>
	request({ method: 'POST', url: `/taks/${id}`, data })

export const deleteApi = (id: number): Promise<AxiosResponse<unknown, unknown>> =>
	request({ method: 'DELETE', url: `/taks/${id}` })
