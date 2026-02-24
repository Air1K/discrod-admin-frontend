import { $api } from '@/shared/api/api.instance.ts'
import {
  ApiAuthResponseToAuthSchema,
  LoginPayloadToApiLoginSchema,
  RegisterPayloadToApiRegisterSchema,
} from '../lib/auth.schema.ts'
import { type LoginPayload, type RegisterPayload } from '../model/auth.type'
import type { ApiAuthResponse, ApiLoginPayload, ApiRegisterPayload } from './auth.type.ts'

export const authApi = {
  registration: async (payload: RegisterPayload) => {
    const payloadDto: ApiRegisterPayload = RegisterPayloadToApiRegisterSchema.parse(payload)
    const { data } = await $api.post<ApiAuthResponse>('/public/user/register', payloadDto)
    return ApiAuthResponseToAuthSchema.parse(data)
  },
  login: async (payload: LoginPayload) => {
    const payloadDto: ApiLoginPayload = LoginPayloadToApiLoginSchema.parse(payload)
    const { data } = await $api.post<ApiAuthResponse>('/public/user/login', payloadDto)
    return ApiAuthResponseToAuthSchema.parse(data)
  },

  logout: async () => {
    const { data } = await $api.post('/public/user/logout')
    return data
  },

  checkAuth: async () => {
    const { data } = await $api.get<ApiAuthResponse>('/public/user/refresh')
    return ApiAuthResponseToAuthSchema.parse(data)
  },
}
