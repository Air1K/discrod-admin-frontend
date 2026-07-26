import { create } from 'zustand'
import type { AuthStore } from './auth.types'

export const authStore = create<AuthStore>((set, get) => ({
  token: null,
  setToken: (token: string) => set({ token }),
  clearToken: () => set({ token: null }),
  isAuthenticated: () => get().token != null,
}))
