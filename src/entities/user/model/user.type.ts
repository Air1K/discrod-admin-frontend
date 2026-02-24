import { z } from 'zod'
import { DiscordUserSchema, type UserRoleSchema, UserSchema } from './user.contracts.ts'

export type UserRole = z.output<typeof UserRoleSchema>
export type DiscordUser = z.output<typeof DiscordUserSchema>
export type User = z.output<typeof UserSchema>
