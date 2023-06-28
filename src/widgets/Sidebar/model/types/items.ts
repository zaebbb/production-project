import type React from 'react'
import AboutIcon from 'shared/assets/icons/about.svg'
import MainIcon from 'shared/assets/icons/main.svg'
import ProfileIcon from 'shared/assets/icons/profile.svg'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import ArticleIcon from 'shared/assets/icons/article-20-20.svg'

export interface SidebarItemType {
  path: string
  text: string
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>
  authOnly?: boolean
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    Icon: MainIcon,
    text: 'link-main',
  },
  {
    path: RoutePath.about,
    Icon: AboutIcon,
    text: 'link-about',
  },
  {
    path: RoutePath.profile,
    Icon: ProfileIcon,
    text: 'link-profile',
    authOnly: true,
  },
  {
    path: RoutePath.articles,
    Icon: ArticleIcon,
    text: 'link-articles',
    authOnly: true,
  },
]
