import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getUserAuthData, isAdmin, isManager, userActions } from '@/entities/User'
import { getRouteAdminPanel, getRouteProfile } from '@/shared/const'
import { ToggleFeatures } from '@/shared/lib/features'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Menu as MenuDeprecated } from '@/shared/ui/Popups/ui/Menu/Menu'
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar'
import { Avatar } from '@/shared/ui/redesigned/Avatar'
import { Menu } from '@/shared/ui/redesigned/Popups/ui/Menu/Menu'

interface AvatarMenuProps {
  className?: string
  lang?: string
}

export const AvatarMenu: React.FC<AvatarMenuProps> = memo((props: AvatarMenuProps) => {
  const { className, lang } = props
  const { t } = useTranslation(lang)
  const isAccessAdmin = useSelector(isAdmin)
  const isAccessManager = useSelector(isManager)
  const isAdminPanel = isAccessAdmin || isAccessManager
  const authData = useSelector(getUserAuthData)
  const dispatch = useAppDispatch()

  const onLogout = React.useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])

  if (!authData) {
    return null
  }

  const items = [
    ...(isAdminPanel ? [{
      content: t('nav-admin'),
      href: getRouteAdminPanel(),
    }] : []),
    {
      content: t('nav-profile'),
      href: getRouteProfile(authData.id),
    },
    {
      content: t('btn-logout'),
      onClick: onLogout,
    },
  ]

  return (
    <ToggleFeatures
      feature={'isAppRedesigned'}
      off={
        <MenuDeprecated
          className={className}
          items={items}
          trigger={<AvatarDeprecated size={30} src={authData.avatar} />}
          direction={'bottom-right'}
        />
      }
      on={
        <Menu
          className={className}
          items={items}
          trigger={<Avatar size={48} src={authData.avatar} />}
          direction={'bottom-right'}
        />
      }
    />
  )
})
