'use client'

import { useCallback, useMemo, useState } from 'react'
import AuthContent from './auth-content'
import { AuthHeader } from './auth-header'
import OtpContent from './otp-content'
import ProfileContent from './profile-content'
import SurveyContent from './survey-content'

const AuthClient = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const contentList = useCallback(() => {
    return [
      {
        title: 'Let’s create your Account.',
        component: <AuthContent onSuccess={() => setCurrentIndex(1)} />,
      },
      {
        title: 'Email Verification',
        component: <OtpContent onSuccess={() => setCurrentIndex(2)} />,
      },
      {
        title: 'Complete your Profile',
        component: <ProfileContent onSuccess={() => setCurrentIndex(3)} />,
      },
      { title: 'Onboarding Survey', component: <SurveyContent onSuccess={() => {}} /> },
    ]
  }, [])

  const currentComponent = useMemo(() => {
    const current = contentList()[currentIndex]
    return current
  }, [currentIndex, contentList])

  const handleBack = () => {
    if (currentIndex === 0) return null
    return setCurrentIndex((prev) => prev - 1)
  }
  return (
    <>
      <AuthHeader
        hideBackBtn={Boolean(currentIndex === 0)}
        onBackClick={handleBack}
        title={currentComponent?.title}
      />
      {currentComponent?.component}
    </>
  )
}

export default AuthClient
