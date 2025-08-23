import {
  CreateUserMutation,
  LoginInput,
  UpdateUserInput,
  useCheckUserMutation,
  useCreateUserMutation,
  useLoginMutation,
  useResendVerificationEmailMutation,
  useResetPasswordMutation,
  useResetPasswordRequestMutation,
  useResetPasswordVerificationMutation,
  useUpdateUserMutation,
  useVerifyEmailMutation,
  VerifyEmailMutation,
} from '@/graphql/generated'
import { toast } from 'src/components/others/toast'
import { routes } from 'src/lib/routes'
import { userAuthStore } from 'src/store/user.store'
import { useError } from '../logic/use-error'
import { useNavigation } from '../logic/use-navigation'

export const useLoginMutateHook = () => {
  const { handleError } = useError()
  const { navigate } = useNavigation()

  const [login, { loading, data: loginData, error }] = useLoginMutation({
    onError(error) {
      handleError(error)
    },
  })

  const [checkUser, { data: checkUserData, loading: isCheckingUser }] = useCheckUserMutation({
    onError(error) {
      handleError(error)
    },
  })

  return {
    onLogin: login,
    loginData,
    isUserExists: Boolean(checkUserData?.checkUser),
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

  const { setLoggedIn } = userAuthStore()

  const [updateUser, { loading }] = useUpdateUserMutation({
    onError(error) {
      handleError(error)
    },
  })

  const [login, { loading: isLoggingIn }] = useLoginMutation({
    async onCompleted(loginData) {
      try {
        const token = loginData.login.accessToken

        if (!token) {
          throw new Error('No token received from login response')
        }

        // Store token before making further requests
        localStorage.setItem('token', token)

        await updateUser({
          variables: { input: updateUserInput },
          context: {
            headers: {
              authorization: `Bearer ${token}`,
            },
          },
        })

        // Post-update actions
        navigate(routes.app.onBoarding.path)
        setLoggedIn(true)
        toast({
          message: 'Profile updated successfully!',
          variant: 'success',
        })
      } catch (err) {
        console.error('Error during login or update:', err)
      }
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

export const useRequestPasswordMutateHook = ({ onSuccess }: { onSuccess: () => void }) => {
  const { handleError } = useError()

  const [resetPassword, { loading }] = useResetPasswordRequestMutation({
    onError(error) {
      handleError(error)
    },
    onCompleted() {
      onSuccess?.()
      toast({
        message: 'OTP code has been resent successfully!',
        variant: 'success',
      })
    },
  })

  const [checkUser, { loading: isCheckingUser }] = useCheckUserMutation({
    onError(error) {
      handleError(error)
    },
  })

  const handleResetPassword = (email: string) => {
    checkUser({
      variables: {
        input: {
          email,
        },
      },
      onCompleted(data) {
        if (!data?.checkUser) {
          toast({
            message: 'User does not exit!',
            variant: 'info',
          })
          return
        }
        resetPassword({
          variables: {
            input: {
              email,
            },
          },
        })
      },
    })
  }

  return {
    loading: isCheckingUser || loading,
    resetPassword: handleResetPassword,
  }
}

export const useResetPasswordVerificationMutateHook = ({
  onSuccess,
}: {
  onSuccess: () => void
}) => {
  const { handleError } = useError()

  const [verifyOtp, { loading }] = useResetPasswordVerificationMutation({
    onError(error) {
      handleError(error)
    },
    onCompleted(data) {
      onSuccess?.()
      toast({
        message: 'Otp verified successfully!',
        variant: 'success',
      })
    },
  })

  return {
    loading,
    verifyOtp,
  }
}

export const useResetPasswordMutateHook = () => {
  const { handleError } = useError()
  const { navigate } = useNavigation()

  const [resetPassword, { loading }] = useResetPasswordMutation({
    onError(error) {
      handleError(error)
    },
    onCompleted(data) {
      navigate(`${routes.auth.login}?email=${data.resetPassword.email}`)
      toast({
        message: 'Password reset successfully!',
        variant: 'success',
      })
    },
  })

  return {
    loading,
    resetPassword,
  }
}
