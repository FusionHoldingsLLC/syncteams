import { useForm } from '@mantine/form'

import { yupResolver } from 'mantine-form-yup-resolver'
import { useEffect, useState } from 'react'
import { toast } from 'src/components/others/toast'
import { LoginMutation } from 'src/graphql/generated'
import { useNavigation } from 'src/hooks/logic/use-navigation'
import { useQueryParams } from 'src/hooks/logic/use-query-params'
import { useLoginMutateHook } from 'src/hooks/mutates/use-auth'
import { useGoogleLogin } from 'src/hooks/queries/use-auth'
import { routes } from 'src/lib/routes'
import { userAuthStore } from 'src/store/user.store'
import { initialValues, validationSchemas } from 'src/validators/auth'

export const useLogin = () => {
  const { navigate } = useNavigation()

  const { onLogin, onCheckUser, loading } = useLoginMutateHook()

  const { loginWithGoogle, loading: isGenerating } = useGoogleLogin()

  const [isUserExists, setIsUserExists] = useState(false)

  const { setLoggedIn } = userAuthStore()

  const [isProfileCompleted, setIsProfileCompleted] = useState<boolean | null>(null)

  const form = useForm({
    initialValues: initialValues.login,
    validate: yupResolver(validationSchemas.login(isUserExists)),
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
    localStorage.setItem('token', data.login.accessToken)
    setLoggedIn(true)

    if (!data?.login?.profileCompleted) {
      setIsProfileCompleted(false)
      toast({
        message: 'Profile is not completed!',
        variant: 'success',
      })
      return
    }

    // navigate(routes.app.admin.dashboard.path)
  }

  const handleSubmit = () => {
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
          navigate(routes.auth.signUp)
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
    isProfileCompleted,
    navigate,
    handleSubmit,
    isUserExists,
    setIsUserExists,
    loginWithGoogle,
    loading,
    isGenerating,
    setIsProfileCompleted,
  }
}
