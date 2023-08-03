import { useSelector } from 'react-redux'
import { getUserAuthData, getUserRoles, type UserRole } from 'entities/User'
import { Navigate, useLocation } from 'react-router-dom'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { useMemo } from 'react'

interface RequireAuthProps {
  children: JSX.Element
  roles?: UserRole[]
}

export const RequireAuth = (props: RequireAuthProps) => {
  const {
    roles,
    children,
  } = props
  const auth = useSelector(getUserAuthData)
  const location = useLocation()
  const userRoles = useSelector(getUserRoles)

  const hasRequiredRoles = useMemo(() => {
    if (!roles) {
      return true
    }

    return roles.some(role => {
      return userRoles?.includes(role)
    })
  }, [roles, userRoles])

  if (!auth) {
    return <Navigate
      to={RoutePath.main}
      state={{ from: location }}
      replace
    />
  }

  if (!hasRequiredRoles) {
    return <Navigate
      to={RoutePath.access_denied}
      state={{ from: location }}
      replace
    />
  }

  return children
}
