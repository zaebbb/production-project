import React from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { type SidebarItemType } from '../../model/types/sidebar'
import cls from './SidebarItem.module.scss'
import { getUserAuthData } from '@/entities/User'
import { classNames } from '@/shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink'

interface SidebarItemProps {
  item: SidebarItemType
  lang: string
  collapsed: boolean
}

export const SidebarItem: React.FC<SidebarItemProps> = (props) => {
  const {
    item,
    collapsed,
    lang,
  } = props
  const { t } = useTranslation(lang)
  const isAuth = useSelector(getUserAuthData)

  if (item.authOnly && !isAuth) {
    return null
  }

  return (
    <AppLink
      to={item.path}
      className={classNames(cls.item, { [cls.collapsed]: collapsed })}
      theme={AppLinkTheme.SECONDARY}
    >
      <item.Icon
        className={cls.icon}
      />
      <span
        className={cls.link}
      >
        {t(item.text)}
      </span>

    </AppLink>
  )
}
