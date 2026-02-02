import type { RouterPath } from '@/shared/router/routerPathKeys'
import { redirect } from 'react-router'
import { sessionStore } from '@/entities/session'

type AccessPolicy = 'authenticated' | 'unauthenticated'

type GuardLoaderProps = {
  redirectTo: RouterPath
  access?: AccessPolicy
  isAuthenticated?: boolean
}

export const guardAccessLoader = ({ redirectTo, access = 'unauthenticated' }: GuardLoaderProps) => {
  const isAuthenticated = sessionStore.getState().isAuth()
  const shouldRedirect =
    (access === 'authenticated' && !isAuthenticated) ||
    (access === 'unauthenticated' && isAuthenticated)

  if (shouldRedirect) return redirect(redirectTo)
  return null
}
