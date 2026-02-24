import { useMutation } from '@tanstack/react-query'
import { authApi } from '@/entities/auth'
import { userStore } from '@/entities/user'
import { sessionStore } from '@/entities/session'

export const useRegistrationMutation = () => {
  return useMutation({
    mutationFn: authApi.registration,
    onSuccess: ({ user, token }) => {
      userStore.getState().setUser(user)
      sessionStore.getState().setToken(token)
    },
  })
}
