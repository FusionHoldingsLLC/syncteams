'use client'

import { useForm } from '@mantine/form'
import { yupResolver } from 'mantine-form-yup-resolver'
import { useCallback, useMemo, useState } from 'react'
import { AuthHeader } from 'src/components/others/auth-header'
import { useNavigation } from 'src/hooks/logic/use-navigation'
import { routes } from 'src/lib/routes'
import { initialValues, validationSchemas } from 'src/validators/auth'
import { ForgetPasswordForm } from './forget-password-form'
import OtpContent from './otp-content'
import { ResetPasswordForm } from './reset-password-form'

const ForgetPasswordContent = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { navigate } = useNavigation()
  const form = useForm({
    initialValues: initialValues.requestResetPassword,
    validate: yupResolver(validationSchemas.requestResetPassword),
  })

  const contentList = useCallback(() => {
    return [
      {
        title: 'Reset Password',
        component: <ForgetPasswordForm formik={form} onSuccess={() => setCurrentIndex(1)} />,
      },
      {
        title: 'Email Verification',
        component: <OtpContent email={form.values.email} onSuccess={() => setCurrentIndex(2)} />,
      },
      {
        title: 'Create a new password.',
        component: <ResetPasswordForm email={form.values.email} />,
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
      {/* <SwitchTheme /> */}
      <AuthHeader onBackClick={handleBack} title={currentComponent?.title} />
      {currentComponent?.component}
    </>
  )
}

export default ForgetPasswordContent
