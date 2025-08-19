import { Metadata } from 'next'
import AuthClient from './components/auth-client'

export const metadata: Metadata = {
  title: 'Sign up',
}

const AuthPage = () => {
  return <AuthClient />
}

export default AuthPage
