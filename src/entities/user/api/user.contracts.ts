import { z } from 'zod'

export const ApiUserRoleSchema = z.enum(['admin', 'user'])
export type ApiUserRole = z.output<typeof ApiUserRoleSchema>

export const ApiDiscordUserSchema = z.object({
  discord_user_id: z.string(),
  username: z.string(),
  global_name: z.string(),
  avatar_url: z.string(),
})
export type ApiDiscordUser = z.output<typeof ApiDiscordUserSchema>

export const ApiUserSchema = z.object({
  id: z.number(),
  user_name: z.string(),
  email: z.string().optional(),
  role: ApiUserRoleSchema,
  discord_user: ApiDiscordUserSchema.optional(),
})
export type ApiUser = z.output<typeof ApiUserSchema>
