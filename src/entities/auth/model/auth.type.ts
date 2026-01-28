import { z } from 'zod'

export const RegisterPayloadSchema = z.object({
  userName: z.string(),
  password: z.string(),
})

export const LoginPayloadSchema = RegisterPayloadSchema.extend({
  rememberMe: z.boolean(),
})

export type RegisterPayload = z.infer<typeof RegisterPayloadSchema>

export type LoginPayload = z.infer<typeof LoginPayloadSchema>
