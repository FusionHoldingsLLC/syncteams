'use client' // Must be the first line

import { usePathname, useRouter } from 'next/navigation'
import { PropsWithChildren, useCallback, useEffect, useState } from 'react'
import { routes } from 'src/lib/routes'
import { flattenRoutes } from 'src/lib/utils'
import { userAuthStore } from 'src/store/user.store'

const RouteGuard = ({ children }: PropsWithChildren) => {
  const router = useRouter()
  const pathname = usePathname()
  const { loggedIn, tokenData } = userAuthStore()
  const [authorized, setAuthorized] = useState(true)

  const flatRoutes = flattenRoutes({ ...routes.app, ...routes.admin })

  const authCheck = useCallback(
    (url: string) => {
      const path = url.split('?')[0]

      const route = flatRoutes.find((r) => r.path === path)

      if (route?.meta?.requiresAuth) {
        if (!loggedIn) {
          setAuthorized(false)
          router.replace(routes.auth.login)
          return
        }

        if (route.meta.role === 'admin' && !tokenData?.isAdmin) {
          if (loggedIn) {
            router.replace(routes.app.dashboard.path)
            return
          }
          setAuthorized(false)
          router.replace(routes.auth.login)
          return
        }
      }

      setAuthorized(true)
    },
    [flatRoutes, loggedIn, tokenData, router],
  )

  useEffect(() => {
    authCheck(pathname)
  }, [pathname, loggedIn, authCheck])

  return authorized ? <>{children}</> : null
}

export default RouteGuard
