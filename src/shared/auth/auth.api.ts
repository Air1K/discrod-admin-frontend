import { $api } from '@/shared/api'
import {
  ApiAuthResponseToAuthSchema,
  LoginPayloadToApiLoginSchema,
  RegisterPayloadToApiRegisterSchema,
} from './auth.schema'
import type { ApiAuthResponse, ApiLoginPayload, ApiRegisterPayload, LoginPayload, RegisterPayload } from './auth.types'

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
