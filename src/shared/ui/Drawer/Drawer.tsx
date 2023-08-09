import React, { memo } from 'react'
import { classNames, type Mods } from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProvider'
import { useModal } from 'shared/lib/hooks/useModal/useModal'
import { Portal } from '../Portal/Portal'
import { Overlay } from '../Overlay/Overlay'
import cls from './Drawer.module.scss'

interface DrawerProps {
  className?: string
  children: React.ReactNode
  isOpen?: boolean
  lazy?: boolean
  onClose?: () => void
}

export const Drawer: React.FC<DrawerProps> = memo((props: DrawerProps) => {
  const {
    className,
    children,
    isOpen,
    onClose,
    lazy,
  } = props
  const { theme } = useTheme()

  const {
    close, isClosing, isMounted,
  } = useModal({
    onClose,
    isOpen,
    animationDelay: 300,
  })

  const mods: Mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  }

  if (lazy && !isMounted) {
    return null
  }

  return (
    <Portal>
      <div className={classNames(cls.Drawer, mods, [className, theme, 'app_drawer'])}>
        <Overlay onClick={close} />
        <div className={cls.content}>
          {children}
        </div>
      </div>
    </Portal>
  )
})
