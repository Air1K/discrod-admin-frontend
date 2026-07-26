import { useMutation } from '@tanstack/react-query'
import { authApi, authStore, userStore } from '@/shared/auth'

export const useRegistrationMutation = () => {
  return useMutation({
    mutationFn: authApi.registration,
    onSuccess: ({ user, token }) => {
      userStore.getState().setUser(user)
      authStore.getState().setToken(token)
    },
  })
}
