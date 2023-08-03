import React, { memo, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { type AppRouteProps, routeConfig } from 'shared/config/routeConfig/routeConfig'
import { PageLoader } from 'widgets/PageLoader'
import { RequireAuth } from './RequireAuth'

const AppRouter: React.FC = () => {
  const renderWithWrapper = React.useCallback((props: AppRouteProps) => {
    const {
      path,
      element,
      authOnly,
      roles,
    } = props

    const routeElement = (
      <>
        {element}
      </>
    )

    return (
      <Route
        key={path}
        path={path}
        element={
          authOnly ? <RequireAuth roles={roles}>{routeElement}</RequireAuth> : routeElement
        }
      />
    )
  }, [])

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(routeConfig).map(renderWithWrapper)}
      </Routes>
    </Suspense>
  )
}

export default memo(AppRouter)
