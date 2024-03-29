import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { getUserAuthData, getUserRoles, type UserRole } from '@/entities/User'

import { getRouteAccessDenied, getRouteMain } from '@/shared/const'

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
      to={getRouteMain()}
      state={{ from: location }}
      replace
    />
  }

  if (!hasRequiredRoles) {
    return <Navigate
      to={getRouteAccessDenied()}
      state={{ from: location }}
      replace
    />
  }

  return children
}
