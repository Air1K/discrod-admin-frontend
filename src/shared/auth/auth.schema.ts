import { AuthResponseSchema, LoginPayloadSchema, RegisterPayloadSchema } from './auth.contracts'
import { ApiAuthResponseSchema, ApiLoginPayloadSchema, ApiRegisterPayloadSchema } from './auth.dto'
import { ApiUserToUserSchema } from './user.schema'
import type { ApiLoginPayload, ApiRegisterPayload, AuthResponse } from './auth.types'

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
