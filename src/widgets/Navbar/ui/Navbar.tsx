import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { Modal } from 'shared/ui/Modal/Modal'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'

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

  const onToggleModal = React.useCallback(() => {
    setIsAuthModal(prev => !prev)
  }, [])

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button
        theme={ThemeButton.CLEAR_INVERTED}
        onClick={onToggleModal}
        className={cls.links}
      >
        {t('login-account')}
      </Button>

      <Modal
        isOpen={isAuthModal}
        onClose={onToggleModal}
      >
        <h1>Hello world</h1>
      </Modal>
    </div>
  )
}
