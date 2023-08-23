import { UserRole } from '@/entities/User'
import { AboutPage } from '@/pages/AboutPage'
import { AdminPanelPage } from '@/pages/AdminPanelPage'
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage'
import { ArticleEditPage } from '@/pages/ArticleEditPage'
import { ArticlesPage } from '@/pages/ArticlesPage'
import { ForbiddenPage } from '@/pages/ForbiddenPage'
import { MainPage } from '@/pages/MainPage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { ProfilePage } from '@/pages/ProfilePage'
import { AppRoutes, RoutePath } from '@/shared/const'
import { type AppRouteProps } from '@/shared/types/router'

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage lang={'main-page'}/>,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage lang={'about-page'}/>,
  },
  [AppRoutes.PROFILE]: {
    path: RoutePath.profile + ':id',
    element: <ProfilePage/>,
    authOnly: true,
  },
  [AppRoutes.ARTICLES]: {
    path: RoutePath.articles,
    element: <ArticlesPage/>,
    authOnly: true,
  },
  [AppRoutes.ARTICLE_DETAILS]: {
    path: RoutePath.article_details + ':id',
    element: <ArticleDetailsPage/>,
    authOnly: true,
  },
  [AppRoutes.ARTICLE_ADD]: {
    path: RoutePath.article_add,
    element: <ArticleEditPage/>,
    authOnly: true,
  },
  [AppRoutes.ARTICLE_EDIT]: {
    path: RoutePath.article_edit,
    element: <ArticleEditPage/>,
    authOnly: true,
  },
  [AppRoutes.ADMIN_PANEL]: {
    path: RoutePath.admin_panel,
    element: <AdminPanelPage/>,
    authOnly: true,
    roles: [UserRole.ADMIN, UserRole.MANAGER],
  },
  [AppRoutes.ACCESS_DENIED]: {
    path: RoutePath.access_denied,
    element: <ForbiddenPage/>,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage/>,
  },
}
