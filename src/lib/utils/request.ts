import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

interface ICodeMsg {
	[key: number]: string | number
}
const codeMsg: ICodeMsg = {
	200: 'OK',
	201: 'Created',
	202: 'Accepted',
	204: 'No Content',
	400: 'Bad Request',
	401: 'Unauthorized',
	403: 'Forbidden',
	404: 'Not Found',
	406: 'Not Acceptable',
	410: 'Gone',
	422: 'Unprocessable Entity',
	500: 'Internal Server Error',
	502: 'Bad Gateway',
	503: 'Service Unavailable',
	504: 'Gateway Timeout'
}

const axiosInstance = axios.create({
	baseURL: `${import.meta.env.VITE_BASE_URL}`,
	withCredentials: false,
	timeout: 10000
})

axiosInstance.interceptors.request.use((config) => {
	config.headers.Authorization = `Bearer ${import.meta.env.VITE_API_TOKEN}`
	return config
})

axiosInstance.interceptors.response.use(
	(response) => {
		return Promise.resolve(response)
	},
	(error) => {
		const { response } = error
		const { status } = response
		if (status !== 401) {
			console.log(response.data.message || codeMsg[status])
		}
		return Promise.reject(response)
	}
)

/**
 * Requests a path, returning a promise.
 *
 * @param  {string} path       The path we want to request
 * @param  {object} [option] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default async function request(options: AxiosRequestConfig): Promise<AxiosResponse> {
	try {
		const response = await axiosInstance(options)
		return response
	} catch (error) {
		return error
	}
}
