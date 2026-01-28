import { createBrowserRouter, redirect, useRouteError, Outlet } from 'react-router'
import { page404Route } from '@/pages/NotFoundPage'
import Spinner from '@/shared/ui/Spinner.tsx'
import { routerPathKeys } from '@/shared/router/routerPathKeys.ts'
import { loginPageRoute } from '@/pages/(auth)/Login'
import BackgroundLayout from '@/shared/ui/layout/BackgroundLayout.tsx'
import { layoutPageRoute } from '@/pages/(layout)/Layout'
import { guestLayoutRoute } from '@/pages/(layout)/GuestLayout'

export const router = createBrowserRouter([
  {
    errorElement: <BubbleError />,
    hydrateFallbackElement: <Spinner />,
    element: (
      <BackgroundLayout>
        <Outlet />
      </BackgroundLayout>
    ),
    children: [
      {
        lazy: layoutPageRoute,
        children: [
          {
            lazy: guestLayoutRoute,
            children: [loginPageRoute],
          },
        ],
      },
      {
        ...page404Route,
      },
      {
        path: '*',
        loader: async () => redirect(routerPathKeys.page404),
      },
    ],
  },
])
function BubbleError(): null {
  const error = useRouteError()

  if (error) {
    if (error instanceof Error) {
      throw error
    } else {
      throw new Error(typeof error === 'string' ? error : JSON.stringify(error))
    }
  }
  return null
}
