import type { User } from './user.type'
import { create } from 'zustand'

type UserStore = {
  user: User | null
  setUser: (user: User) => void
  updateUser: (user: User) => void
  clearUser: () => void
}

export const userStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user: User) => set({ user }),
  clearUser: () => set({ user: null }),
  updateUser: (userData: Partial<User>) => set((state) => ({ ...state, ...userData })),
}))
