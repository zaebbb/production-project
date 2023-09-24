import React from 'react'
import { Modal } from 'src/shared/ui/redesigned/Modal'
import { LoginFormAsync } from '../LoginForm/LoginForm.async'
import { classNames } from '@/shared/lib/classNames/classNames'

interface LoginModalProps {
  className?: string
  isOpen: boolean
  onClose: () => void
}

export const LoginModal: React.FC<LoginModalProps> = (props) => {
  const {
    className,
    isOpen,
    onClose,
  } = props

  return (
    <Modal
      className={classNames('', {}, [className])}
      onClose={onClose}
      isOpen={isOpen}
      lazy
    >
      <LoginFormAsync onSuccess={onClose} />
    </Modal>
  )
}
