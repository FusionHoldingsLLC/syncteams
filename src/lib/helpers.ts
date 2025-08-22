import { QueryClient } from '@tanstack/react-query'
import { ApiError } from 'src/types/general'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
})

export const extractErrorMessage = (error: ApiError): string => {
  // Check for server error first

  // Default fallback
  return 'Something went wrong. Please try again.'
}
