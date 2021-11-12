import type { Task } from '$lib/typings'
import axios from 'axios'

// Create a instance of axios to use the same base url.
const axiosAPI = axios.create({
	baseURL: `${import.meta.env.VITE_BASE_URL}` // it's not recommended to have this info here.
})

// implement a method to execute all the request from here.
const apiRequest = (method, url, request) => {
	const headers = {
		authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`
	}
	//using the axios instance to perform the request that received from each http method
	return axiosAPI({
		method,
		url,
		data: request,
		headers
	})
		.then((res) => {
			return Promise.resolve(res.data)
		})
		.catch((err) => {
			return Promise.reject(err)
		})
}

// function to execute the http get request
const get = (url: string, request?: unknown): Promise<Response> => apiRequest('get', url, request)

// function to execute the http delete request
const deleteRequest = (url: string, request: unknown): Promise<Response> =>
	apiRequest('delete', url, request)

// function to execute the http post request
const post = (url: string, request: unknown): Promise<Task> => apiRequest('post', url, request)

// function to execute the http put request
const put = (url: string, request: unknown): Promise<Response> => apiRequest('put', url, request)

// function to execute the http path request
const patch = (url: string, request: unknown): Promise<Response> =>
	apiRequest('patch', url, request)

// expose your method to other services or actions
const api = {
	get,
	delete: deleteRequest,
	post,
	put,
	patch
}
export default api
