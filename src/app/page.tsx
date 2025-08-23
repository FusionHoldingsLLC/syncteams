'use client'

import AuthLayoutClient from 'src/components/layout/auth'
import AuthClient from './(public-routes)/(auth-pages)/auth/login/components/login-client'
import './globals.css'

export default function Home() {
  return (
    <AuthLayoutClient>
      <AuthClient />
    </AuthLayoutClient>
  )
}
