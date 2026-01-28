import { authApi } from '@/entities/auth/api/authApi.ts'
import { userStore } from '@/entities/user/model/user.store.ts'
import axios from 'axios'

export const checkAuthQuery = async () => {
  try {
    const user = await authApi.checkAuth()
    userStore.getState().setUser(user)
    return user
  } catch (error: unknown) {
    console.error('checkAuthQuery', error)
    if (!axios.isAxiosError(error)) return null //TODO Временное решение поменять на throw error
    if (error.response?.status !== 401) throw error
    return null
  }
}
