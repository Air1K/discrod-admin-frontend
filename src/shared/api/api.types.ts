import { type ApiErrorDataDtoSchema, ApiErrorDataSchema } from './api.contracts.ts'
import { z } from 'zod'

export type ApiErrorData = z.infer<typeof ApiErrorDataSchema>
export type ApiErrorDataDto = z.infer<typeof ApiErrorDataDtoSchema>
