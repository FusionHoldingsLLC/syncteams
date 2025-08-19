export const routes = {
  landing: '/',
  auth: {
    login: '/auth/login',
    signUp: '/auth/sign-up',
    forgetPassword: '/auth/forget-password',
    verifyEmail: '/auth/verify-email',
    changePassword: '/auth/change-password',
    devReg: '/auth/dev-register',
  },
  app: {
    admin: {
      dashboard: '/admin/dashboard',
      users: '/admin/users',
      userDetails: (slug: string) => `/admin/users/${slug}`,
      settings: '/admin/settings',
    },
  },
} as const
