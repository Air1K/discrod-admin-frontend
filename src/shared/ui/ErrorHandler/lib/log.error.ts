import type { ErrorInfo } from 'react'

export function logError(error: unknown, info: ErrorInfo) {
  const err = error instanceof Error ? error : new Error(String(error))
  if (import.meta.env.MODE === 'development') {
    console.log('Caught error:', err)
    console.log('Error details:', info)
  } else {
    // Log error to an external service in production
  }
}
