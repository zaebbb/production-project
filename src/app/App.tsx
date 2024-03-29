import React, { Suspense } from 'react'
import { useSelector } from 'react-redux'
import { useAppToolbar } from './lib/hooks/useAppToolbar/useAppToolbar'
import { withTheme } from './providers/ThemeProvider/ui/withTheme'
import { AppRouter } from './providers/router'
import { getUserMounted, initAuthData } from '@/entities/User'
import { AppLoaderLayout } from '@/shared/layout/AppLoaderLayout'
import { MainLayout } from '@/shared/layout/MainLayout'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ToggleFeatures } from '@/shared/lib/features'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme'
import { Navbar } from '@/widgets/Navbar'
import { PageLoader } from '@/widgets/PageLoader'
import { Sidebar } from '@/widgets/Sidebar'

const App: React.FC = () => {
  const { theme } = useTheme()
  const dispatch = useAppDispatch()
  const mounted = useSelector(getUserMounted)
  const toolbar = useAppToolbar()

  React.useEffect(() => {
    dispatch(initAuthData())
  }, [dispatch])

  if (!mounted) {
    return (
      <ToggleFeatures
        feature={'isAppRedesigned'}
        off={<PageLoader />}
        on={
          <div id={'app'} className={classNames('app_redesigned', {}, [theme])}>
            <AppLoaderLayout />
          </div>
        }
      />
    )
  }

  return (
    <ToggleFeatures
      feature={'isAppRedesigned'}
      off={
        <div id={'app'} className={classNames('app', {}, [theme])}>
          <Suspense fallback={<PageLoader />} >
            <Navbar lang={'navbar'} />
            <div className="content-page">
              <Sidebar lang={'sidebar'} />
              {mounted && <AppRouter />}
            </div>
          </Suspense>
        </div>
      }
      on={
        <div id={'app'} className={classNames('app_redesigned', {}, [theme])}>
          <Suspense fallback={<PageLoader />}>
            <MainLayout
              Header={<Navbar lang={'navbar'} />}
              Sidebar={<Sidebar lang={'sidebar'} />}
              Content={<AppRouter />}
              Toolbar={toolbar}
            />
          </Suspense>
        </div>
      }
    />
  )
}

export default withTheme(App)
