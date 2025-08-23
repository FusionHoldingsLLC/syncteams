import { Metadata } from 'next'
import ForgetPasswordClient from './components/forget-password-client'

export const metadata: Metadata = {
  title: 'SyncTeams | Forget Password',
}

const ForgetPasswordPage = () => {
  return <ForgetPasswordClient />
}

export default ForgetPasswordPage
