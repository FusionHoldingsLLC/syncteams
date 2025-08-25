import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { createEncryptedStorage } from './encrypted-store'

interface UIStoreState {
  isDarkMode: boolean | null
  isNavCollapse: boolean
  setIsDarkMode: (value: boolean) => void
  setIsNavCollapse: (type: boolean) => void
  reset: () => void
}

const initialState = {
  isDarkMode: false,
  isNavCollapse: false,
}

export const useUiStore = create<UIStoreState>()(
  persist(
    (set) => ({
      ...initialState,
      setIsNavCollapse: (type: boolean) => set({ isNavCollapse: type }),
      setIsDarkMode: (val) => set({ isDarkMode: val }),
      reset: () => set(initialState),
    }),
    {
      name: 'app-ui-store',
      storage: createEncryptedStorage<UIStoreState>(), // ✅ type-safe now
    },
  ),
)
