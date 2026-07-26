import { z } from 'zod'
import { AuthResponseSchema, LoginPayloadSchema, RegisterPayloadSchema } from './auth.contracts'
import {
  ApiAuthResponseSchema,
  ApiLoginPayloadSchema,
  ApiRegisterPayloadSchema,
} from './auth.dto'

export type RegisterPayload = z.infer<typeof RegisterPayloadSchema>
export type LoginPayload = z.infer<typeof LoginPayloadSchema>
export type AuthResponse = z.infer<typeof AuthResponseSchema>

export type ApiRegisterPayload = z.infer<typeof ApiRegisterPayloadSchema>
export type ApiLoginPayload = z.infer<typeof ApiLoginPayloadSchema>
export type ApiAuthResponse = z.infer<typeof ApiAuthResponseSchema>

export type AuthStore = {
  token: AuthResponse['token'] | null
  setToken: (token: string) => void
  clearToken: () => void
  isAuthenticated: () => boolean
}
