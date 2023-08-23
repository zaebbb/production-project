import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getUserAuthData, isAdmin, isManager, userActions } from '@/entities/User'
import { RoutePath } from '@/shared/const'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Avatar } from '@/shared/ui/Avatar'
import { Menu } from '@/shared/ui/Popups/ui/Menu/Menu'

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

  return (
    <Menu
      className={className}
      items={[
        ...(isAdminPanel ? [{
          content: t('nav-admin'),
          href: RoutePath.admin_panel,
        }] : []),
        {
          content: t('nav-profile'),
          href: RoutePath.profile + authData.id,
        },
        {
          content: t('btn-logout'),
          onClick: onLogout,
        },
      ]}
      trigger={<Avatar size={30} src={authData.avatar} />}
      direction={'bottom-right'}
    />
  )
})
