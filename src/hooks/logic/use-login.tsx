import { useForm } from '@mantine/form'

import { yupResolver } from 'mantine-form-yup-resolver'
import { useEffect, useState } from 'react'
import { toast } from 'src/components/others/toast'
import { LoginMutation, useGetCurrentUserLazyQuery } from 'src/graphql/generated'
import { useNavigation } from 'src/hooks/logic/use-navigation'
import { useQueryParams } from 'src/hooks/logic/use-query-params'
import {
  useLoginMutateHook,
  useResendVerificationEmailMutateHook,
} from 'src/hooks/mutates/use-auth'
import { useGoogleLogin } from 'src/hooks/queries/use-auth'
import { routes } from 'src/lib/routes'
import { userAuthStore } from 'src/store/user.store'
import { initialValues, validationSchemas } from 'src/validators/auth'

export const useLogin = () => {
  const { navigate } = useNavigation()

  const { onLogin, onCheckUser, loading } = useLoginMutateHook()

  const { loginWithGoogle, loading: isGenerating } = useGoogleLogin()
  const { resendEmail } = useResendVerificationEmailMutateHook()

  const [isUserExists, setIsUserExists] = useState(false)

  const { setLoggedIn, setUser, setTokenData } = userAuthStore()

  const [showCompleteSetup, setShowCompleteSetup] = useState(false)
  const [setupType, setSetupType] = useState<'email' | 'profile' | null>(null)

  const form = useForm({
    initialValues: initialValues.login,
    validate: yupResolver(validationSchemas.login(isUserExists)),
  })

  const [showAdminModal, setShowAdminModal] = useState(false)

  const closeSetup = () => {
    setShowCompleteSetup(false)
    setSetupType(null)
  }

  const [getCurrentUser, { data, loading: isGettingUser, error }] = useGetCurrentUserLazyQuery({
    onCompleted: (data) => {
      if (data?.getCurrentUser) {
        setUser({
          ...data.getCurrentUser,
        })

        navigate(routes.app.dashboard.path)
      }
    },
    onError: () => {
      navigate(routes.app.dashboard.path)
    },
  })

  const { getParam, removeParam } = useQueryParams()

  const email = getParam('email') as string
  useEffect(() => {
    if (!form.values.email) {
      form.setFieldValue('email', email)

      setTimeout(() => {
        removeParam('email')
      }, 300)
    }
  }, [email])

  const onLoginSuccess = (data: LoginMutation) => {
    if (!data?.login?.isVerified) {
      setShowCompleteSetup(true)
      setSetupType('email')
      toast({
        message: 'Email is not verified!',
        variant: 'success',
      })
      resendEmail({
        variables: {
          input: {
            email: form.values.email,
          },
        },
      })
      return
    }

    if (!data?.login?.profileCompleted) {
      setShowCompleteSetup(true)
      setSetupType('profile')
      toast({
        message: 'Profile is not completed!',
        variant: 'success',
      })
      return
    }
    setTokenData({
      ...data.login,
    })
    setLoggedIn(true)

    if (data.login.isAdmin) {
      setShowAdminModal(true)
      return
    }
    getCurrentUser()
  }

  const handleSubmit = () => {
    closeSetup()
    if (isUserExists) {
      onLogin({
        variables: {
          input: {
            email: form.values.email,
            password: form.values.password,
          },
        },
        onCompleted(data) {
          onLoginSuccess(data)
        },
      })

      return
    }
    onCheckUser({
      variables: {
        input: {
          email: form.values.email,
        },
      },
      onCompleted(data) {
        if (!data?.checkUser) {
          navigate(`${routes.auth.signUp}?email=${form.values.email}`)
          toast({
            message: 'User does not exit!',
            variant: 'info',
          })

          return
        }
        setIsUserExists(data.checkUser)
      },
    })
  }

  return {
    form,
    navigate,
    handleSubmit,
    isUserExists,
    setIsUserExists,
    loginWithGoogle,
    loading: loading || isGettingUser,
    isGenerating,
    setShowCompleteSetup,
    showCompleteSetup,
    setupType,
    setSetupType,
    closeSetup,
    showAdminModal,
  }
}
