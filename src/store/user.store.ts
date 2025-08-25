import { GetCurrentUserQuery } from 'src/graphql/generated'
import { queryClient } from 'src/lib/helpers'
import { TokenData } from 'src/types/general'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { createEncryptedStorage } from './encrypted-store'

interface AuthStoreProps {
  loggedIn: boolean
  user: GetCurrentUserQuery['getCurrentUser'] | null
  tokenData: TokenData | null
  setUser: (user: GetCurrentUserQuery['getCurrentUser']) => void
  setTokenData: (tokenData: TokenData) => void
  logOut: () => void
  setLoggedIn: (loggedIn: boolean) => void
}
export const userAuthStore = create<AuthStoreProps>()(
  devtools(
    persist(
      (set) => ({
        loggedIn: false,
        user: null,
        tokenData: null,
        setLoggedIn: (loggedIn: boolean) => set({ loggedIn }),
        setUser: (user: GetCurrentUserQuery['getCurrentUser']) =>
          set({ user: user, loggedIn: true }),
        setTokenData: (tokenData: TokenData) => set({ tokenData }),
        logOut: () => {
          queryClient.invalidateQueries()
          set({ loggedIn: false, user: null, tokenData: null })
        },
      }),
      {
        name: 'auth-storage',
        storage: createEncryptedStorage<AuthStoreProps>(), // ✅ type-safe now
      },
    ),
  ),
)
