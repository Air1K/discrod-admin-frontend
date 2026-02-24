import { routerPathKeys } from '@/shared/router/routerPathKeys.ts'
import type { RouteObject } from 'react-router'

export const homeRoute: RouteObject = {
  path: routerPathKeys.home,
  lazy: async () => {
    const Component = await import('../ui/Home.page.tsx').then((module) => module.default)
    return { Component }
  },
}
