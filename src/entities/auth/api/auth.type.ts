import { z } from 'zod'
import {
  ApiAuthResponseSchema,
  ApiLoginPayloadSchema,
  type ApiRegisterPayloadSchema,
} from './auth.dto.ts'

export type ApiRegisterPayload = z.output<typeof ApiRegisterPayloadSchema>

export type ApiLoginPayload = z.output<typeof ApiLoginPayloadSchema>

export type ApiAuthResponse = z.output<typeof ApiAuthResponseSchema>
