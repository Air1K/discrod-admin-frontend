import { LoginPayloadSchema, RegisterPayloadSchema } from '@/entities/auth'

export const RegistrationFormSchema = RegisterPayloadSchema.extend({
  userName: LoginPayloadSchema.shape.userName.min(3, { message: 'Минимум 3 символа' }),
  password: LoginPayloadSchema.shape.password.min(8, { message: 'Минимум 8 символов' }),
  confirmPassword: LoginPayloadSchema.shape.password.min(8, { message: 'Минимум 8 символов' }),
}).refine(({ password, confirmPassword }) => password === confirmPassword, {
  path: ['confirmPassword'],
  message: 'Пароли не совпадают',
})
