import { Navigate } from 'react-router'
import type { FallbackProps } from 'react-error-boundary'
import { Button } from '../../shadcn/Button'

export function ErrorHandler(props: FallbackProps) {
  const { error, resetErrorBoundary } = props

  const err = error instanceof Error ? error : undefined

  if ((error as any)?.response?.status === 404) {
    return (
      <Navigate
        to="/404"
        replace
      />
    )
  }

  return (
    <div>
      <h3>Something went wrong.</h3>
      {import.meta.env.MODE === 'development' && (
        <>
          <ul className="error-messages">
            <li key={err?.message ?? 'unknown-error'}>{err?.message ?? 'Unknown error'}</li>
          </ul>
          <pre>{err?.stack}</pre>
        </>
      )}
      <Button
        type="button"
        onClick={resetErrorBoundary}
      >
        Try again
      </Button>
    </div>
  )
}
