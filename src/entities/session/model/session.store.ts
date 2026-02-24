import { create } from 'zustand'
import type { SessionStore } from './session.type.ts'

export const sessionStore = create<SessionStore>((set, get) => ({
  token: null,
  setToken: (token: string) => set({ token }),
  clearToken: () => set({ token: null }),
  isAuth: () => get().token != null,
}))
