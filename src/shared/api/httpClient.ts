import axios from 'axios'

export const $baseUrl = import.meta.env.BACKEND_API_URL ?? ''

if (!$baseUrl) {
  console.warn('[api] BACKEND_API_URL is not set')
}

export const $api = axios.create({
  baseURL: `${$baseUrl}/api/bot`,
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
