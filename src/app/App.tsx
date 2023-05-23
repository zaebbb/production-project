import React, { Suspense } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from 'app/providers/router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { PageLoader } from 'widgets/PageLoader'

export const App: React.FC = () => {
  const { theme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback={<PageLoader />} >
        <Navbar lang={'navbar'} />
        <div className="content-page">
          <Sidebar lang={'sidebar'} />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}
