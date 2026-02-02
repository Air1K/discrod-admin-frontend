import { type ApiUser, UserSchema } from '@/entities/user/@x/auth'
import { type LoginPayload, type RegisterPayload } from '../model/auth.type'
import {
  type ApiLoginPayload,
  ApiLoginPayloadSchema,
  type ApiRegisterPayload,
  ApiRegisterPayloadSchema,
} from './auth.contracts.ts'
import { $api } from '@/shared/api/httpClient.ts'

export const authApi = {
  registration: async (payload: RegisterPayload) => {
    const payloadDto: ApiRegisterPayload = ApiRegisterPayloadSchema.parse(payload)
    const { data } = await $api.post<ApiUser>('/api/public/auth/register', payloadDto)
    return UserSchema.parse(data)
  },
  login: async (payload: LoginPayload) => {
    const payloadDto: ApiLoginPayload = ApiLoginPayloadSchema.parse(payload)
    const { data } = await $api.post<ApiUser>('/api/public/auth/login', payloadDto)
    return UserSchema.parse(data)
  },

  logout: async () => {
    const { data } = await $api.post('/api/public/auth/logout')
    return data
  },

  checkAuth: async () => {
    const { data } = await $api.get<ApiUser>('/api/public/auth/check-auth')
    return UserSchema.parse(data)
  },
}
