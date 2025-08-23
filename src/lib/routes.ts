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
    onBoarding: {
      path: '/onboarding',
      meta: {
        requiresAuth: true,
      },
    },
    admin: {
      dashboard: {
        path: '/admin/dashboard',
        meta: {
          requiresAuth: true,
          role: 'admin',
        },
      },
      users: {
        path: '/admin/users',
        meta: {
          requiresAuth: true,
          role: 'admin',
        },
      },
      userDetails: (slug: string) => ({
        path: `/admin/users/${slug}`,
        meta: {
          requiresAuth: true,
          role: 'admin',
        },
      }),
      settings: {
        path: '/admin/settings',
        meta: {
          requiresAuth: true,
          role: 'admin',
        },
      },
    },
  },
} as const
