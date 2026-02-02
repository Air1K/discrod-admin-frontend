import { create } from 'zustand'

type SessionStore = {
  token: string | null
  setToken: (token: string) => void
  clearToken: () => void
  isAuth: () => boolean
}

export const sessionStore = create<SessionStore>((set, get) => ({
  token: null,
  setToken: (token: string) => set({ token }),
  clearToken: () => set({ token: null }),
  isAuth: () => get().token != null,
}))
