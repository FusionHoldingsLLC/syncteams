import { Metadata } from 'next'
import AuthClient from './components/auth-client'

export const metadata: Metadata = {
  title: 'Login',
}

const AuthPage = () => {
  return <AuthClient />
}

export default AuthPage
