import { authApi } from '@/entities/auth'
import { userStore } from '@/entities/user'
import axios from 'axios'
import { sessionStore } from '@/entities/session'

export const checkAuthQuery = async () => {
  try {
    const { user, token } = await authApi.checkAuth()
    userStore.getState().setUser(user)
    sessionStore.getState().setToken(token)
    return user
  } catch (error: unknown) {
    console.error('checkAuthQuery', error)
    if (!axios.isAxiosError(error)) return null
    if (error.response?.status !== 401) return null //TODO Временное решение поменять на throw error
    return null
  }
}
