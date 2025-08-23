'use client'

import { useForm } from '@mantine/form'
import { yupResolver } from 'mantine-form-yup-resolver'
import { useCallback, useMemo, useState } from 'react'
import { SwitchTheme } from 'src/components/buttons/switch-theme'
import { useNavigation } from 'src/hooks/logic/use-navigation'
import { routes } from 'src/lib/routes'
import { initialValues, validationSchemas } from 'src/validators/auth'
import { AuthHeader } from '../../../../components/others/auth-header'
import SurveyContent from './survey-content'

const OnboardingContent = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { navigate } = useNavigation()
  const form = useForm({
    initialValues: initialValues.signUp,
    validate: yupResolver(validationSchemas.signUp),
  })

  const contentList = useCallback(() => {
    return [{ title: 'Onboarding Survey', component: <SurveyContent onSuccess={() => {}} /> }]
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
      <SwitchTheme />
      <AuthHeader onBackClick={handleBack} title={currentComponent?.title} />
      {currentComponent?.component}
    </>
  )
}

export default OnboardingContent
