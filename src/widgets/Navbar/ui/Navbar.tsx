import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import cls from './Navbar.module.scss'
import { getUserAuthData } from '@/entities/User'
import { LoginModal } from '@/features/AuthByUsername'
import { AvatarMenu } from '@/features/avatarMenu'
import { NotificationButton } from '@/features/notificationButton'
import { getRouteArticleCreate } from '@/shared/const'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ToggleFeatures } from '@/shared/lib/features'
import { HStack } from '@/shared/ui/Stack'
import { AppLink, AppLinkTheme } from '@/shared/ui/deprecated/AppLink'
import { Button, ThemeButton } from '@/shared/ui/deprecated/Button'
import { Text, TextTheme } from '@/shared/ui/deprecated/Text'

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

  const onCloseModal = React.useCallback(() => {
    setIsAuthModal(false)
  }, [])

  const onShowModal = React.useCallback(() => {
    setIsAuthModal(true)
  }, [])

  if (authData) {
    return (
      <ToggleFeatures
        feature={'isAppRedesigned'}
        off={
          <header className={classNames(cls.Navbar, {}, [className])}>
            <Text text={t('logo-text')} theme={TextTheme.PRIMARY_INVERTED} />

            <HStack align={'center'} className={cls.links}>
              <AppLink
                to={getRouteArticleCreate()}
                theme={AppLinkTheme.SECONDARY}
              >
                {t('create-article')}
              </AppLink>
              <NotificationButton />
              <AvatarMenu lang={lang} />
            </HStack>
          </header>
        }
        on={
          <header className={classNames(cls.NavbarRedesigned, {}, [className])}>
            <HStack align={'center'} className={cls.links}>
              <NotificationButton />
              <AvatarMenu lang={lang} />
            </HStack>
          </header>
        }
      />
    )
  }

  return (
    <ToggleFeatures
      feature={'isAppRedesigned'}
      off={
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
      }
      on={
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
      }
    />

  )
})
