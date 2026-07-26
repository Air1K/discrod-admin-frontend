import { Providers } from '@/app/providers'
import { attachAuthInterceptor } from '@/shared/api'
import { authStore } from '@/shared/auth'
import BackgroundLayout from '@/shared/ui/layout/BackgroundLayout.tsx'
import { ErrorBoundary } from 'react-error-boundary'
import { ErrorHandler, logError } from '@/shared/ui/ErrorHandler'

attachAuthInterceptor(() => authStore.getState().token)

export default function App() {
  return (
    <BackgroundLayout>
      <ErrorBoundary
        FallbackComponent={ErrorHandler}
        onError={logError}
      >
        <Providers.rectQuery>
          <Providers.theme>
            <Providers.router />
          </Providers.theme>
        </Providers.rectQuery>
      </ErrorBoundary>
    </BackgroundLayout>
  )
}
