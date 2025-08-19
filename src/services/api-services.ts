import { server } from 'src/lib/axios-util'
import { FormLoginValue } from 'src/types/auth'

const apis = {
  auth: {
    login: (data: FormLoginValue) => server.post('/auth/basic', data),
    resendVerification: (data: { FormId: string }) =>
      server.post('/onboarding/resend_verification', data),
  },
  onboarding: {
    startOnboarding: () => server.get('/onboarding/start'),
  },
}

export default apis
