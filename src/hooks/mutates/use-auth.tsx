import {
  CreateUserMutation,
  useCheckUserMutation,
  useCreateUserMutation,
  useLoginMutation,
  useResendVerificationEmailMutation,
  useVerifyEmailMutation,
  VerifyEmailMutation,
} from '@/graphql/generated'
import { toast } from 'src/components/others/toast'
import { routes } from 'src/lib/routes'
import { useError } from '../logic/use-error'
import { useNavigation } from '../logic/use-navigation'

export const useLoginMutateHook = () => {
  const { handleError } = useError()
  const { navigate } = useNavigation()

  const [login, { loading, error }] = useLoginMutation({
    onError(error) {
      handleError(error)
    },
  })

  const [checkUser, { data: checkUserData, loading: isCheckingUser }] = useCheckUserMutation({
    onError(error) {
      handleError(error)
    },
    onCompleted(data) {
      if (!data?.checkUser) {
        navigate(routes.auth.signUp)
        toast({
          message: 'User does not exit!',
          variant: 'info',
        })
      }
    },
  })

  console.log(checkUserData)
  return {
    onLoin: login,
    onCheckUser: checkUser,
    loading: loading || isCheckingUser,
    error,
  }
}
export const useCreateUserMutateHook = ({
  onSuccess,
}: {
  onSuccess: (data: CreateUserMutation) => void
}) => {
  const { handleError } = useError()

  const [signUp, { loading }] = useCreateUserMutation({
    onError(error) {
      handleError(error)
    },
    onCompleted(data) {
      onSuccess(data)
    },
  })

  return {
    loading,
    signUp,
  }
}
export const useResendVerificationEmailMutateHook = () => {
  const { handleError } = useError()

  const [resend, { loading }] = useResendVerificationEmailMutation({
    onError(error) {
      handleError(error)
    },
    onCompleted(data) {},
  })

  return {
    loading,
    resendEmail: resend,
  }
}
export const useVerifyEmailMutateHook = ({
  onSuccess,
}: {
  onSuccess: (data: VerifyEmailMutation) => void
}) => {
  const { handleError } = useError()

  const [verifyEmail, { loading }] = useVerifyEmailMutation({
    onError(error) {
      handleError(error)
    },
    onCompleted(data) {
      onSuccess(data)
    },
  })

  return {
    loading,
    verifyEmail,
  }
}
