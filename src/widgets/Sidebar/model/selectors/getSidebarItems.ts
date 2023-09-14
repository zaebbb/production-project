import { createSelector } from '@reduxjs/toolkit'
import { type SidebarItemType } from '../types/sidebar'
import { getUserAuthData } from '@/entities/User'
import ProfileIcon from '@/shared/assets/icons/redesigned/Avatar.svg'
import MainIcon from '@/shared/assets/icons/redesigned/Home.svg'
import AboutIcon from '@/shared/assets/icons/redesigned/Info.svg'
import ArticleIcon from '@/shared/assets/icons/redesigned/Vector.svg'
import {
  getRouteAbout,
  getRouteArticles,
  getRouteMain,
  getRouteProfile,
} from '@/shared/const'

export const getSidebarItems = createSelector(
  getUserAuthData,
  (authData) => {
    const sidebarItemsList: SidebarItemType[] = [
      {
        path: getRouteMain(),
        Icon: MainIcon,
        text: 'link-main',
      },
      {
        path: getRouteAbout(),
        Icon: AboutIcon,
        text: 'link-about',
      },
    ]

    if (authData) {
      sidebarItemsList.push(
        {
          path: getRouteProfile(authData.id),
          Icon: ProfileIcon,
          text: 'link-profile',
          authOnly: true,
        },
        {
          path: getRouteArticles(),
          Icon: ArticleIcon,
          text: 'link-articles',
          authOnly: true,
        }
      )
    }

    return sidebarItemsList
  }
)
