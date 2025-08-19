import { queryClient } from 'src/lib/helpers'
import { UserDetails } from 'src/types/general'
import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'

interface AuthStoreProps {
  loggedIn: boolean
  user: UserDetails | null
  setUser: (user: UserDetails) => void
  logOut: () => void
}
export const userAuthStore = create<AuthStoreProps>()(
  devtools(
    persist(
      (set) => ({
        loggedIn: false,
        user: null,
        setUser: (user: UserDetails) => set({ user: user, loggedIn: true }),
        logOut: () => {
          queryClient.invalidateQueries()
          set({ loggedIn: false, user: null })
        },
      }),
      {
        name: 'auth-storage',
        storage: createJSONStorage(() => localStorage),
      },
    ),
  ),
)
