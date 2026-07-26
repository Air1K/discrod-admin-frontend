import axios from 'axios'
import { authApi } from './auth.api'
import { authStore } from './auth.store'
import { userStore } from './user.store'

export const checkAuthQuery = async () => {
  try {
    const { user, token } = await authApi.checkAuth()
    userStore.getState().setUser(user)
    authStore.getState().setToken(token)
    return user
  } catch (error: unknown) {
    console.error('checkAuthQuery', error)

    if (!axios.isAxiosError(error)) return null
    if (error.response?.status !== 401) return null

    return null
  }
}
