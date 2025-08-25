'use client'

import { useForm } from '@mantine/form'
import { yupResolver } from 'mantine-form-yup-resolver'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { AuthHeader } from 'src/components/others/auth-header'
import { useNavigation } from 'src/hooks/logic/use-navigation'
import { useQueryParams } from 'src/hooks/logic/use-query-params'
import { routes } from 'src/lib/routes'
import { initialValues, validationSchemas } from 'src/validators/auth'
import OtpContent from './otp-content'
import ProfileContent from './profile-content'
import { SingUpForm } from './signup-form'

const AuthContent = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { getParam } = useQueryParams()

  const email = getParam('email') as string
  const routeIndex = getParam('index')
  const { navigate } = useNavigation()

  const form = useForm({
    initialValues: initialValues.signUp,
    validate: yupResolver(validationSchemas.signUp),
  })

  useEffect(() => {
    setCurrentIndex(routeIndex ? parseInt(routeIndex) : 0)
    if (!email) {
      form.setFieldValue('email', email)
    }
  }, [email, routeIndex])

  const contentList = useCallback(() => {
    return [
      {
        title: 'Let’s create your Account.',
        component: <SingUpForm formik={form} onSuccess={() => setCurrentIndex(1)} />,
      },
      {
        title: 'Email Verification',
        component: <OtpContent email={form.values.email} onSuccess={() => setCurrentIndex(2)} />,
      },
      {
        title: 'Complete your Profile',
        component: (
          <ProfileContent
            loginDetail={{
              email: form.values.email,
              password: form.values.password,
            }}
          />
        ),
      },
    ]
  }, [form])

  const currentComponent = useMemo(() => {
    const current = contentList()[currentIndex]
    return current
  }, [currentIndex, contentList])

  const handleBack = () => {
    if (currentIndex === 0) return navigate(routes.auth.login)
    return setCurrentIndex((prev) => prev - 1)
  }
  return (
    <>
      <AuthHeader onBackClick={handleBack} title={currentComponent?.title} />
      {currentComponent?.component}
    </>
  )
}

export default AuthContent
