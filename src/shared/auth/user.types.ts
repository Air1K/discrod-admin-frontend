import { z } from 'zod'
import { ApiDiscordUserSchema, ApiUserRoleSchema, ApiUserSchema } from './user.dto'
import { DiscordUserSchema, UserRoleSchema, UserSchema } from './user.contracts'

export type UserRole = z.infer<typeof UserRoleSchema>
export type DiscordUser = z.infer<typeof DiscordUserSchema>
export type User = z.infer<typeof UserSchema>

export type ApiUserRole = z.infer<typeof ApiUserRoleSchema>
export type ApiDiscordUser = z.infer<typeof ApiDiscordUserSchema>
export type ApiUser = z.infer<typeof ApiUserSchema>

export type UserStore = {
  user: User | null
  setUser: (user: User) => void
  updateUser: (user: Partial<User>) => void
  clearUser: () => void
}
