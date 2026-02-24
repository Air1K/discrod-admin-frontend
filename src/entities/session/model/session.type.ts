export type SessionStore = Session & SessionStoreAction

type SessionStoreAction = {
  setToken: (token: string) => void
  clearToken: () => void
  isAuth: () => boolean
}

export type Session = {
  token: string | null
}
