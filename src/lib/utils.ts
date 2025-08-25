export const flattenRoutes = (routes: any) => {
  let flatRoutes: any[] = []

  Object.values(routes).forEach((route) => {
    if (typeof route === 'function') {
      // For now, we can't handle dynamic routes here.
      // They will be handled in the RouteGuard.
    } else if (typeof route === 'object' && route !== null) {
      if (route.hasOwnProperty('path')) {
        flatRoutes.push(route)
      } else {
        flatRoutes = flatRoutes.concat(flattenRoutes(route))
      }
    }
  })

  return flatRoutes
}
