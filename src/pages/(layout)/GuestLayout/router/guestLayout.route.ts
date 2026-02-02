import { type LazyRouteFunction, type RouteObject } from 'react-router'

export const guestLayoutRoute: LazyRouteFunction<RouteObject> = async () => {
  const loader = await import('../model/guestLayout.loader.ts').then((module) => module.default)
  return { loader }
}
