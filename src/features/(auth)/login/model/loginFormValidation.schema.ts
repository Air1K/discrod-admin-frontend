import { LoginPayloadSchema } from '@/entities/auth'
import { extendShapeFrom } from '@/shared/lib/extendShapeFrom.ts'

export const LoginFormSchema = LoginPayloadSchema.extend(
  extendShapeFrom<typeof LoginPayloadSchema>()({
    userName: LoginPayloadSchema.shape.userName.min(3, { message: 'Минимум 3 символа' }),
    password: LoginPayloadSchema.shape.password.min(8, { message: 'Минимум 8 символов' }),
    rememberMe: LoginPayloadSchema.shape.rememberMe.optional().default(false),
  }),
)
