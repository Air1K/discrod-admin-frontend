import { ApiUserSchema } from './user.dto'
import { UserSchema } from './user.contracts'
import type { User } from './user.types'

export const ApiUserToUserSchema = ApiUserSchema.transform((api): User => {
  const discordUser =
    api.discord_user == null
      ? api.discord_user
      : {
          discordUserId: api.discord_user.discord_user_id,
          username: api.discord_user.username,
          globalName: api.discord_user.global_name,
          avatarUrl: api.discord_user.avatar_url,
        }

  return {
    id: api.id,
    userName: api.user_name,
    email: api.email,
    role: api.role,
    discordUser,
  }
}).pipe(UserSchema)
