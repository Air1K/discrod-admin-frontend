import { type FC } from 'react'
import { router } from './config.tsx'
import { RouterProvider } from 'react-router'

const AppRouterProvider: FC = () => {
  return <RouterProvider router={router} />
}

export { AppRouterProvider }
