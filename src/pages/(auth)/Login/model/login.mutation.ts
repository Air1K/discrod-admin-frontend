import { useMutation } from '@tanstack/react-query'
import { authApi, authStore, userStore } from '@/shared/auth'

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: authApi.login,
    onSuccess: ({ user, token }) => {
      userStore.getState().setUser(user)
      authStore.getState().setToken(token)
    },
  })
}
