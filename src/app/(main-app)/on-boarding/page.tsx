import AuthLayoutClient from '@/components/layout/auth'
import { Metadata } from 'next'
import OnboardingClient from './components/onboarding-client'

export const metadata: Metadata = {
  title: 'SyncTeams | Onboarding',
}

const OnboardingPage = () => {
  return (
    <AuthLayoutClient>
      <OnboardingClient />
    </AuthLayoutClient>
  )
}

export default OnboardingPage
