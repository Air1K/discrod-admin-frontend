import { useMutation } from '@tanstack/react-query'
import { authApi, authStore } from '@/entities/auth'
import { userStore } from '@/entities/user'

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: authApi.login,
    onSuccess: ({ user, token }) => {
      userStore.getState().setUser(user)
      authStore.getState().setToken(token)
    },
  })
}
