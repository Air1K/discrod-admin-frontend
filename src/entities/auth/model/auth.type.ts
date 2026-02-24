import { z } from 'zod'
import { AuthResponseSchema, LoginPayloadSchema, RegisterPayloadSchema } from './auth.contracts.ts'

export type RegisterPayload = z.infer<typeof RegisterPayloadSchema>

export type LoginPayload = z.infer<typeof LoginPayloadSchema>

export type AuthResponse = z.infer<typeof AuthResponseSchema>
