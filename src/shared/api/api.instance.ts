import axios, { AxiosError } from 'axios'
import { ApiErrorDataDtoSchema } from './api.contracts.ts'
import { normalizeValidationErrors } from './api.lib.ts'

export const $baseUrl = import.meta.env.VITE_API_URL ?? ''

if (!$baseUrl) {
  console.warn('[api] BACKEND_API_URL is not set')
}

export const $api = axios.create({
  baseURL: `${$baseUrl}/api`,
})

export function attachAuthInterceptor(getAuthToken: () => string | null) {
  $api.interceptors.request.use(
    (config) => {
      const token = getAuthToken()
      if (token != null) {
        config.headers.Authorization = `Bearer ${token}`
      } else {
        console.warn('[api] TOKEN is not set')
      }
      return config
    },
    (error) => Promise.reject(error),
  )
}

$api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!axios.isAxiosError(error)) {
      return Promise.reject(error)
    }

    const validation = ApiErrorDataDtoSchema.safeParse(error.response?.data)

    if (!validation.success) {
      return Promise.reject(error)
    }

    const normalizedErrorResponse = {
      ...error.response!,
      data: normalizeValidationErrors(validation.data),
    }

    return Promise.reject(
      new AxiosError(
        error.message,
        error.code,
        error.config,
        error.request,
        normalizedErrorResponse,
      ),
    )
  },
)
