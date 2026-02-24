import { z } from 'zod'

export const ApiUserRoleSchema = z.enum(['admin', 'user'])

export const ApiDiscordUserSchema = z.object({
  discord_user_id: z.string(),
  username: z.string(),
  global_name: z.string().nullable().optional(),
  avatar_url: z.string().nullable().optional(),
})

export const ApiUserSchema = z.object({
  id: z.number(),
  user_name: z.string(),
  email: z.email().optional(),
  role: ApiUserRoleSchema,
  discord_user: ApiDiscordUserSchema.nullable().optional(),
})
