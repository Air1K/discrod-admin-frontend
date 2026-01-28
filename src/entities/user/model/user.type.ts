import { z } from 'zod'
import { ApiDiscordUserSchema, ApiUserRoleSchema, ApiUserSchema } from '../api/user.contracts'

export const UserRoleSchema = ApiUserRoleSchema
export type UserRole = z.output<typeof UserRoleSchema>

export const DiscordUserSchema = ApiDiscordUserSchema.transform((u) => ({
  discordUserId: u.discord_user_id,
  userName: u.username,
  globalName: u.global_name,
  avatarUrl: u.avatar_url,
}))
export type DiscordUser = z.output<typeof DiscordUserSchema>

export const UserSchema = ApiUserSchema.transform((u) => ({
  id: u.id,
  userName: u.user_name,
  email: u.email,
  role: u.role,
  discordUser: u.discord_user ? DiscordUserSchema.parse(u.discord_user) : undefined,
}))
export type User = z.output<typeof UserSchema>
