import { toast } from '@/components/others/toast'
import { ApolloError } from '@apollo/client'

export const useError = () => {
  const handleError = (err: ApolloError) => {
    const error = { ...err }

    const message = error?.cause?.message

    toast({
      title: 'Error',
      message: message || 'Something went wrong',
      variant: 'error',
    })
  }

  return {
    handleError,
  }
}
