import React, { memo, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { RequireAuth } from './RequireAuth'
import { PageLoader } from '@/widgets/PageLoader'
import { routeConfig } from '@/app/providers/router/config/routeConfig'
import { type AppRouteProps } from '@/shared/types/router'

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
