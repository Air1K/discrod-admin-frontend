import { useMutation } from '@tanstack/react-query'
import { authApi } from '@/entities/auth'
import { userStore } from '@/entities/user'
import { sessionStore } from '@/entities/session'

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: authApi.login,
    onSuccess: ({ user, token }) => {
      userStore.getState().setUser(user)
      sessionStore.getState().setToken(token)
    },
  })
}
