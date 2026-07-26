import type { RouterPath } from '@/shared/router/routerPathKeys'
import { redirect } from 'react-router'
import { authStore } from '@/shared/auth'

type AccessPolicy = 'authenticated' | 'unauthenticated'

type GuardLoaderProps = {
  redirectTo: RouterPath
  access?: AccessPolicy
  isAuthenticated?: boolean
}

export const guardAccessLoader = ({ redirectTo, access = 'unauthenticated' }: GuardLoaderProps) => {
  const isAuthenticated = authStore.getState().isAuthenticated()
  const shouldRedirect =
    (access === 'authenticated' && !isAuthenticated) ||
    (access === 'unauthenticated' && isAuthenticated)

  if (shouldRedirect) return redirect(redirectTo)
  return null
}
