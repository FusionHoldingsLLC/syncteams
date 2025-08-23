import {
  CreateUserMutation,
  LoginInput,
  UpdateUserInput,
  useCheckUserMutation,
  useCreateUserMutation,
  useLoginMutation,
  useResendVerificationEmailMutation,
  useUpdateUserMutation,
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
    onCompleted() {
      toast({
        message: 'OTP code has been resent successfully!',
        variant: 'success',
      })
    },
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
      toast({
        message: 'Email verified successfully!',
        variant: 'success',
      })
    },
  })

  return {
    loading,
    verifyEmail,
  }
}

export const useUpdateUserMutateHook = ({
  updateUserInput,
}: {
  updateUserInput: UpdateUserInput
}) => {
  const { handleError } = useError()

  const { navigate } = useNavigation()

  const [updateUser, { loading }] = useUpdateUserMutation({
    onError(error) {
      handleError(error)
    },
    onCompleted() {
      navigate(routes.app.onBoarding)
      toast({
        message: 'Profile updated successfully!',
        variant: 'success',
      })
    },
  })

  const [login, { loading: isLoggingIn }] = useLoginMutation({
    onCompleted(data) {
      localStorage.setItem('token', data.login.accessToken)
      updateUser({
        variables: {
          input: updateUserInput,
        },
      })
    },
    onError(error) {
      handleError(error)
    },
  })

  const handleUpdate = ({ loginDetail }: { loginDetail: LoginInput }) => {
    login({
      variables: {
        input: loginDetail,
      },
    })
  }

  return {
    loading: isLoggingIn || loading,
    updateUser,
    handleUpdate,
  }
}
