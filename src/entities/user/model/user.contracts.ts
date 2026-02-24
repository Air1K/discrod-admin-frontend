import { z } from 'zod'

export const UserRoleSchema = z.enum(['admin', 'user'])

export const DiscordUserSchema = z.object({
  discordUserId: z.string(),
  username: z.string(),
  globalName: z.string().nullable().optional(),
  avatarUrl: z.string().nullable().optional(),
})

export const UserSchema = z.object({
  id: z.number(),
  userName: z.string(),
  email: z.email().optional(),
  role: UserRoleSchema,
  discordUser: DiscordUserSchema.nullable().optional(),
})
