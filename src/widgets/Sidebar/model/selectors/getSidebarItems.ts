import { createSelector } from '@reduxjs/toolkit'
import { getUserAuthData } from 'entities/User'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import MainIcon from 'shared/assets/icons/main.svg'
import AboutIcon from 'shared/assets/icons/about.svg'
import ProfileIcon from 'shared/assets/icons/profile.svg'
import ArticleIcon from 'shared/assets/icons/article-20-20.svg'
import { type SidebarItemType } from '../types/sidebar'

export const getSidebarItems = createSelector(
  getUserAuthData,
  (authData) => {
    const sidebarItemsList: SidebarItemType[] = [
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
    ]

    if (authData) {
      sidebarItemsList.push(
        {
          path: RoutePath.profile + authData.id,
          Icon: ProfileIcon,
          text: 'link-profile',
          authOnly: true,
        },
        {
          path: RoutePath.articles,
          Icon: ArticleIcon,
          text: 'link-articles',
          authOnly: true,
        }
      )
    }

    return sidebarItemsList
  }
)
