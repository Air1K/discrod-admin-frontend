import { z } from 'zod'
import { RegisterPayloadSchema } from '@/entities/auth'

export const ApiRegisterPayloadSchema = RegisterPayloadSchema.transform((t) => ({
  user_name: t.userName,
  password: t.password,
}))

export const ApiLoginPayloadSchema = ApiRegisterPayloadSchema

export type ApiRegisterPayload = z.output<typeof ApiRegisterPayloadSchema>

export type ApiLoginPayload = z.output<typeof ApiLoginPayloadSchema>
