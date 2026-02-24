import type { ApiErrorData, ApiErrorDataDto } from './api.types.ts'

export function normalizeValidationErrors(data: ApiErrorDataDto): ApiErrorData {
  return Object.entries(data.errors).flatMap(([field, messages]) =>
    messages.map((message) => `${field} ${message}`),
  )
}
