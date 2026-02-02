import { routerPathKeys } from '@/shared/router/routerPathKeys.ts'
import type { RouteObject } from 'react-router'

export const registrationRoute: RouteObject = {
  path: routerPathKeys.register,
  lazy: async () => {
    const Component = await import('../ui/Registration.page.tsx').then((module) => module.default)
    return { Component }
  },
}
