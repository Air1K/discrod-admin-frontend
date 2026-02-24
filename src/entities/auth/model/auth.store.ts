import { create } from 'zustand'
import type { AuthStore } from './auth.type.ts'

export const authStore = create<AuthStore>((set, get) => ({
  token: null,
  setToken: (token: string) => set({ token }),
  clearToken: () => set({ token: null }),
  isAuth: () => get().token != null,
}))
