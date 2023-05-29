import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './LoginForm.module.scss'
import { Input } from 'shared/ui/Input/Input'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

interface LoginFormProps {
  className?: string
}

export const LoginForm: React.FC<LoginFormProps> = (props) => {
  const { className } = props
  const { t } = useTranslation()

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input
        placeholder={t('input-login')}
        type={'text'}
        className={cls.input}
      />
      <Input
        placeholder={t('input-password')}
        type={'text'}
        className={cls.input}
      />
      <Button
        theme={ThemeButton.OUTLINE}
        className={cls.inputBtn}
      >
        {t('btn-auth')}
      </Button>
    </div>
  )
}
