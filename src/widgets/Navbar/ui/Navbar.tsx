import React, { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { LoginModal } from 'features/AuthByUsername'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthData, isAdmin, isManager, userActions } from 'entities/User'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { HStack } from 'shared/ui/Stack'
import { Menu } from 'shared/ui/Menu/Menu'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string
  lang?: string
}

export const Navbar: React.FC<NavbarProps> = memo((props: NavbarProps) => {
  const {
    className,
    lang,
  } = props
  const { t } = useTranslation(lang)
  const [isAuthModal, setIsAuthModal] = React.useState<boolean>(false)
  const authData = useSelector(getUserAuthData)
  const dispatch = useDispatch()
  const isAccessAdmin = useSelector(isAdmin)
  const isAccessManager = useSelector(isManager)
  const isAdminPanel = isAccessAdmin || isAccessManager

  const onCloseModal = React.useCallback(() => {
    setIsAuthModal(false)
  }, [])

  const onShowModal = React.useCallback(() => {
    setIsAuthModal(true)
  }, [])

  const onLogout = React.useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])

  if (authData) {
    return (
      <header className={classNames(cls.Navbar, {}, [className])}>
        <Text text={t('logo-text')} theme={TextTheme.PRIMARY_INVERTED} />

        <HStack align={'center'} className={cls.links}>
          <AppLink
            to={RoutePath.article_add}
            theme={AppLinkTheme.SECONDARY}
          >
            {t('create-article')}
          </AppLink>
          <Menu
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
        </HStack>

      </header>
    )
  }

  return (
    <header className={classNames(cls.Navbar, {}, [className])}>
      <Button
        theme={ThemeButton.CLEAR_INVERTED}
        onClick={onShowModal}
        className={cls.links}
      >
        {t('login-account')}
      </Button>

      {isAuthModal && (
        <LoginModal
          isOpen={isAuthModal}
          onClose={onCloseModal}
        />
      )}
    </header>
  )
})
