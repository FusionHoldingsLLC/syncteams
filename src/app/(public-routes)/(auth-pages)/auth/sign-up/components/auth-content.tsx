'use client'

import { useForm } from '@mantine/form'
import { yupResolver } from 'mantine-form-yup-resolver'
import { useCallback, useMemo, useState } from 'react'
import { useNavigation } from 'src/hooks/logic/use-navigation'
import { routes } from 'src/lib/routes'
import { initialValues, validationSchemas } from 'src/validators/auth'
import { AuthHeader } from './auth-header'
import OtpContent from './otp-content'
import ProfileContent from './profile-content'
import { SingUpForm } from './signup-form'
import SurveyContent from './survey-content'

const AuthContent = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { navigate } = useNavigation()
  const form = useForm({
    initialValues: initialValues.signUp,
    validate: yupResolver(validationSchemas.signUp),
  })

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
        component: <ProfileContent onSuccess={() => setCurrentIndex(3)} />,
      },
      { title: 'Onboarding Survey', component: <SurveyContent onSuccess={() => {}} /> },
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
