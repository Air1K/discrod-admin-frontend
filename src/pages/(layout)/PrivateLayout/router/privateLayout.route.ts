import { type LazyRouteFunction, Outlet, type RouteObject } from 'react-router'

export const privateLayoutRoute: LazyRouteFunction<RouteObject> = async () => {
  const loader = await import('../model/privateLayout.loader.ts').then((module) => module.default)
  return { loader, Outlet }
}
