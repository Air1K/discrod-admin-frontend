import { useMutation } from '@tanstack/react-query'
import { authApi, authStore } from '@/entities/auth'
import { userStore } from '@/entities/user'

export const useRegistrationMutation = () => {
  return useMutation({
    mutationFn: authApi.registration,
    onSuccess: ({ user, token }) => {
      userStore.getState().setUser(user)
      authStore.getState().setToken(token)
    },
  })
}
