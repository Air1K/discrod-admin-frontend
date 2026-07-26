import { z } from 'zod'
import { UserSchema } from './user.contracts'

export const RegisterPayloadSchema = z.object({
  userName: z.string(),
  password: z.string(),
})

export const LoginPayloadSchema = z.object({
  userName: z.string(),
  password: z.string(),
  rememberMe: z.boolean(),
})

export const AuthResponseSchema = z.object({
  user: UserSchema,
  token: z.string(),
})
