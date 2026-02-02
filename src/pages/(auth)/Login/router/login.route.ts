import { routerPathKeys } from '@/shared/router/routerPathKeys.ts'
import type { RouteObject } from 'react-router'

export const loginRoute: RouteObject = {
  path: routerPathKeys.login,
  lazy: async () => {
    const Component = await import('../ui/Login.page.tsx').then((module) => module.default)
    return { Component }
  },
}
