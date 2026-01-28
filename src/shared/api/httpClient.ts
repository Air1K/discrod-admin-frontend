import axios from 'axios'

export const $baseUrl = import.meta.env.BACKEND_API_URL ?? ''

if (!$baseUrl) {
  console.warn('[api] BACKEND_API_URL is not set')
}

export const $api = axios.create({
  baseURL: `${$baseUrl}/api/bot`,
})

$api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers = config.headers ?? {}
    config.headers.Authorization = `Bearer ${token}`
  }

  console.warn('[api] TOKEN is not set')
  return config
})
