import { routerPathKeys } from '@/shared/router/routerPathKeys.ts'
import type { RouteObject } from 'react-router'

export const loginPageRoute: RouteObject = {
  path: routerPathKeys.login,
  lazy: async () => {
    const [loader, Component] = await Promise.all([
      await import('../model/loginPage.loader.ts').then((module) => module.default),
      await import('../ui/LoginPage').then((module) => module.default),
    ])

    return { loader, Component }
  },
}
