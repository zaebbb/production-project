import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Modal.module.scss'
import { Portal } from 'shared/ui/Portal/Portal'
import { useTheme } from 'app/providers/ThemeProvider'

interface ModalProps {
  className?: string
  children?: React.ReactNode
  isOpen?: boolean
  onClose: () => void
}

const ANIMATION_DELAY: number = 300

export const Modal: React.FC<ModalProps> = (props) => {
  const {
    className,
    children,
    isOpen = false,
    onClose,
  } = props

  const [isClosing, setIsClosing] = React.useState<boolean>()
  const timerRef = React.useRef<ReturnType<typeof setTimeout>>()
  const { theme } = useTheme()

  const closeHandler = React.useCallback(() => {
    if (onClose) {
      setIsClosing(true)
      timerRef.current = setTimeout(() => {
        onClose()
        setIsClosing(false)
      }, ANIMATION_DELAY)
    }
  }, [onClose])

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  const onKeyDown = React.useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeHandler()
    }
  }, [closeHandler])

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
    [cls[theme]]: true,
  }

  React.useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown)
    }

    return () => {
      clearTimeout(timerRef.current)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onKeyDown])

  return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [className])}>
        <div
          className={cls.overlay}
          onClick={closeHandler}
        >
          <div
            className={cls.content}
            onClick={onContentClick}
          >
            {children}
          </div>
        </div>
      </div>
    </Portal>
  )
}
