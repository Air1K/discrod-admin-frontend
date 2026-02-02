import { createBrowserRouter, redirect, useRouteError, Outlet } from 'react-router'
import { page404Route } from '@/pages/NotFoundPage'
import Spinner from '@/shared/ui/Spinner.tsx'
import { routerPathKeys } from '@/shared/router/routerPathKeys.ts'
import { loginRoute } from '@/pages/(auth)/Login'
import BackgroundLayout from '@/shared/ui/layout/BackgroundLayout.tsx'
import { checkAuthQuery } from '@/feature/(auth)/checkAuth'
import { registrationRoute } from '@/pages/(auth)/Registration'
import { guardAccessLoader } from '@/app/providers/router/loader.lib.ts'

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
        loader: checkAuthQuery,
        children: [
          {
            loader: () =>
              guardAccessLoader({
                redirectTo: routerPathKeys.home,
                access: 'unauthenticated',
              }),
            children: [loginRoute, registrationRoute],
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
