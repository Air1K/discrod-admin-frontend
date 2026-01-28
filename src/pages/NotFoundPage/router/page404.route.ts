import { routerPathKeys } from '@/shared/router/routerPathKeys.ts'
import type { RouteObject } from 'react-router'

export const page404Route: RouteObject = {
  path: routerPathKeys.page404,
  lazy: async () => {
    const Component = await import('../ui/NotFoundPage.tsx').then((module) => module.default)
    return { Component }
  },
}
