import { useCallback, useMemo, useState } from 'react'
import { AuthHeader } from 'src/components/others/auth-header'
import { LoginInput } from 'src/graphql/generated'
import OtpContent from '../../sign-up/components/otp-content'
import ProfileContent from '../../sign-up/components/profile-content'

export const CompleteSetup = ({
  loginData,
  onClose,
  setupType,
}: {
  loginData: LoginInput
  onClose: () => void
  setupType: 'email' | 'profile' | null
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const contentList = useCallback(() => {
    return [
      {
        hide: Boolean(setupType === 'profile'),
        title: 'Email Verification',
        component: <OtpContent email={loginData.email} onSuccess={() => setCurrentIndex(1)} />,
      },
      {
        title: 'Complete your Profile',
        component: (
          <ProfileContent
            loginDetail={{
              email: loginData.email,
              password: loginData.password,
            }}
          />
        ),
      },
    ]
  }, [loginData.email, setupType, loginData.password, setCurrentIndex])

  const sectionList = () => {
    return contentList().filter((item) => !item.hide)
  }

  const handleBack = () => {
    if (currentIndex === 0) return onClose()
    return setCurrentIndex((prev) => prev - 1)
  }
  const currentComponent = useMemo(() => {
    const current = sectionList()[currentIndex]
    return current
  }, [currentIndex, sectionList])
  return (
    <>
      <AuthHeader onBackClick={handleBack} title={currentComponent?.title} />
      {currentComponent?.component}
    </>
  )
}
