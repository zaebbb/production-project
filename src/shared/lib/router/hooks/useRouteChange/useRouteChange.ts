import React from 'react'
import { matchPath, useLocation } from 'react-router-dom'
import { AppRouteByPath, AppRoutes } from '@/shared/const'

export const useRouteChange = () => {
  const location = useLocation()
  const [appRoute, setAppRoute] = React.useState(AppRoutes.MAIN)

  React.useEffect(() => {
    Object.entries(AppRouteByPath)
      .forEach(([pattern, route]) => {
        if (matchPath(pattern, location.pathname)) {
          setAppRoute(route)
        }
      })
  }, [location.pathname])

  return appRoute
}
