import { type FC } from 'react'
import { queryClient } from '@/shared/config/queryClient.ts'
import { QueryClientProvider, type QueryClientProviderProps } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const ReactQuery: FC<Omit<QueryClientProviderProps, 'client'>> = ({ children, ...props }) => {
  return (
    <QueryClientProvider {...props} client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-left" />
    </QueryClientProvider>
  )
}

export { ReactQuery }
