import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { LoginModal } from 'features/AuthByUsername'

interface NavbarProps {
  className?: string
  lang?: string
}

export const Navbar: React.FC<NavbarProps> = (props) => {
  const {
    className,
    lang,
  } = props
  const { t } = useTranslation(lang)
  const [isAuthModal, setIsAuthModal] = React.useState<boolean>(false)

  const onCloseModal = React.useCallback(() => {
    setIsAuthModal(false)
  }, [])

  const onShowModal = React.useCallback(() => {
    setIsAuthModal(true)
  }, [])

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button
        theme={ThemeButton.CLEAR_INVERTED}
        onClick={onShowModal}
        className={cls.links}
      >
        {t('login-account')}
      </Button>

      <LoginModal
        isOpen={isAuthModal}
        onClose={onCloseModal}
      />
    </div>
  )
}
