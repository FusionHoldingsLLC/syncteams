// auth-mutations.ts
import { useMutation } from '@tanstack/react-query'
import { toast } from 'src/components/others/toast'
import apis from 'src/services/api-services'
import { FormLoginValue } from 'src/types/auth'
import { ErrorRes } from 'src/types/general'

const errorDefault = 'Something went wrong'

// Login Mutation
export const useLoginMutation = () => {
  return useMutation({
    mutationFn: (values: FormLoginValue) => apis.auth.login(values),
    onSuccess: () => {
      toast({
        title: 'Sign in',
        message: 'Sign in successfully',
        variant: 'success',
      })
    },
    onError: (error: ErrorRes) => {
      const errorMessage = error?.response?.data?.message || errorDefault
      toast({
        title: 'Sign in',
        message: errorMessage,
        variant: 'error',
      })
    },
  })
}
