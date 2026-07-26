import { create } from 'zustand'
import type { UserStore } from './user.types'

export const userStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
  updateUser: (userData) =>
    set((state) => ({
      user: state.user == null ? null : { ...state.user, ...userData },
    })),
}))
