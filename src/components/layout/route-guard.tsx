'use client' // This must be the first line in the file

import { usePathname, useRouter } from 'next/navigation'
import { PropsWithChildren, useEffect, useState } from 'react'
import { routes } from 'src/lib/routes'
import { flattenRoutes } from 'src/lib/utils'
import { userAuthStore } from 'src/store/user.store'

const RouteGuard = ({ children }: PropsWithChildren) => {
  const router = useRouter()
  const pathname = usePathname()
  const { loggedIn, user } = userAuthStore()
  const [authorized, setAuthorized] = useState(false)

  function authCheck(url: string) {
    const path = url.split('?')[0]
    const flatRoutes = flattenRoutes(routes.app)
    let route = flatRoutes.find((r) => r.path === path)

    if (!route && path.startsWith('/admin/users/')) {
      route = { meta: { requiresAuth: true, role: 'admin' } }
    }

    if (route?.meta?.requiresAuth) {
      if (!loggedIn) {
        setAuthorized(false)
        router.push(routes.auth.login)
        return
      }

      if (route.meta.role && user?.role !== route.meta.role) {
        setAuthorized(false)
        router.push(routes.landing)
        return
      }
    }

    setAuthorized(true)
  }

  useEffect(() => {
    authCheck(pathname)
  }, [pathname, loggedIn, user])

  return authorized ? <>{children}</> : null
}

export default RouteGuard
