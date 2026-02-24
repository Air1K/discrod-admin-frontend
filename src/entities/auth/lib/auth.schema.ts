import {
  ApiAuthResponseSchema,
  ApiLoginPayloadSchema,
  ApiRegisterPayloadSchema,
} from '../api/auth.dto.ts'
import { ApiUserToUserSchema } from '@/entities/user/@x/auth.ts'
import {
  AuthResponseSchema,
  LoginPayloadSchema,
  RegisterPayloadSchema,
} from '../model/auth.contracts.ts'
import type { AuthResponse } from '../model/auth.type.ts'
import type { ApiLoginPayload, ApiRegisterPayload } from '@/entities/auth/api/auth.type.ts'

export const ApiAuthResponseToAuthSchema = ApiAuthResponseSchema.transform(
  (api): AuthResponse => ({
    user: ApiUserToUserSchema.parse(api.user),
    token: api.token,
  }),
).pipe(AuthResponseSchema)

export const RegisterPayloadToApiRegisterSchema = RegisterPayloadSchema.transform(
  (payload): ApiRegisterPayload => ({
    user_name: payload.userName,
    password: payload.password,
  }),
).pipe(ApiRegisterPayloadSchema)

export const LoginPayloadToApiLoginSchema = LoginPayloadSchema.transform(
  (payload): ApiLoginPayload => ({
    user_name: payload.userName,
    password: payload.password,
    remember_me: payload.rememberMe,
  }),
).pipe(ApiLoginPayloadSchema)
