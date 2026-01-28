import { QueryClientProvider } from '@tanstack/react-query'
import { router } from './router/browser-router'
import { RouterProvider } from 'react-router'
import { queryClient } from '@/shared/config/queryClient.ts'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ThemeProvider } from './providers/theme/ThemeProvider.tsx'

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-left" />
    </QueryClientProvider>
  )
}
