import { GetCurrentUserDocument } from '@/graphql/generated'
import { useQuery } from '@tanstack/react-query'
import { client } from 'src/lib/apollo-client'

export const useGetCurrentUser = () => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['currentUser'],
    queryFn: async () => {
      const response = await client.query({ query: GetCurrentUserDocument })
      return response
    },
    enabled: false, // 👈 prevents auto-fetch, acts like lazy query
  })

  return {
    getCurrentUser: refetch, // 👈 trigger function
    currentUserData: data,
    isGettingUser: isLoading,
    error,
  }
}
