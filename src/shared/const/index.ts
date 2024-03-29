export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLE_DETAILS = 'article_details',
  ARTICLE_ADD = 'article_add',
  ARTICLE_EDIT = 'article_edit',
  ADMIN_PANEL = 'admin_panel',
  SETTINGS = 'settings',
  ACCESS_DENIED = 'access_denied',

  NOT_FOUND = 'not_found'
}

export const getRouteMain = () => '/'
export const getRouteAbout = () => '/about'
export const getRouteProfile = (id: string) => `/profile/${id}`
export const getRouteArticles = () => '/articles'
export const getRouteArticleDetails = (id: string) => `/articles/${id}`
export const getRouteArticleCreate = () => '/articles/create/'
export const getRouteArticleEdit = (id: string) => `/articles/${id}/edit`
export const getRouteAdminPanel = () => '/admin-panel'
export const getRouteSettings = () => '/user/settings'
export const getRouteAccessDenied = () => '/access-denied'
export const getRouteNotFound = () => '*'

export { Theme } from '@/shared/const/theme'

export const AppRouteByPath: Record<string, AppRoutes> = {
  [getRouteMain()]: AppRoutes.MAIN,
  [getRouteAbout()]: AppRoutes.ABOUT,
  [getRouteProfile(':id')]: AppRoutes.PROFILE,
  [getRouteArticles()]: AppRoutes.ARTICLES,
  [getRouteArticleDetails(':id')]: AppRoutes.ARTICLE_DETAILS,
  [getRouteArticleCreate()]: AppRoutes.ARTICLE_ADD,
  [getRouteArticleEdit(':id')]: AppRoutes.ARTICLE_EDIT,
  [getRouteAdminPanel()]: AppRoutes.ADMIN_PANEL,
  [getRouteSettings()]: AppRoutes.SETTINGS,
  [getRouteAccessDenied()]: AppRoutes.ACCESS_DENIED,
}
