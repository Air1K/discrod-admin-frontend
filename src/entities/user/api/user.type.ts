import { ApiDiscordUserSchema, type ApiUserRoleSchema, ApiUserSchema } from './user.dto.ts'
import { z } from 'zod'

export type ApiUserRole = z.output<typeof ApiUserRoleSchema>

export type ApiDiscordUser = z.output<typeof ApiDiscordUserSchema>

export type ApiUser = z.output<typeof ApiUserSchema>
