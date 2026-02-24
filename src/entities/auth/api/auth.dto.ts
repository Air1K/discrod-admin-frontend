import { z } from 'zod'
import { ApiUserSchema } from '@/entities/user/@x/auth.ts'

export const ApiRegisterPayloadSchema = z.object({
  user_name: z.string(),
  password: z.string(),
})

export const ApiAuthResponseSchema = z.object({
  user: ApiUserSchema,
  token: z.string(),
})

export const ApiLoginPayloadSchema = z.object({
  user_name: z.string(),
  password: z.string(),
  remember_me: z.boolean(),
})
