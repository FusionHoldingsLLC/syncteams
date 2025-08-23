import { Metadata } from 'next'
import LoginClient from './components/login-client'

export const metadata: Metadata = {
  title: 'SyncTeams | Sign In',
}

const LoginPage = () => {
  return <LoginClient />
}

export default LoginPage
