import { type LazyRouteFunction, Outlet, type RouteObject } from 'react-router'

export const layoutPageRoute: LazyRouteFunction<RouteObject> = async () => {
  const loader = await import('../model/layout.loader.ts').then((module) => module.default)
  return { loader, Component: Outlet }
}
