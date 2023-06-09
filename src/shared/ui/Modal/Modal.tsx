import React from 'react'
import {
  classNames, type Mods,
} from 'shared/lib/classNames/classNames'
import cls from './Modal.module.scss'
import { Portal } from 'shared/ui/Portal/Portal'

interface ModalProps {
  className?: string
  children?: React.ReactNode
  isOpen?: boolean
  onClose: () => void
  lazy?: boolean
}

const ANIMATION_DELAY: number = 300

export const Modal: React.FC<ModalProps> = (props) => {
  const {
    className,
    children,
    isOpen = false,
    onClose,
    lazy,
  } = props

  const [isClosing, setIsClosing] = React.useState<boolean>(false)
  const [isMounted, setIsMounted] = React.useState<boolean>(false)
  const timerRef = React.useRef<ReturnType<typeof setTimeout>>()

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

  const mods: Mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
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

  React.useEffect(() => {
    if (isOpen) {
      setIsMounted(true)
    }
  }, [isOpen])

  if (lazy && !isMounted) {
    return null
  }

  return (
    <Portal>
      <div className={
        classNames(
          cls.Modal, mods, [className]
        )}
      >
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
