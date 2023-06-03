import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './LoginForm.module.scss'
import { Input } from 'shared/ui/Input/Input'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState'
import { loginActions } from '../../model/slice/loginSlice'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { Text, TextTheme } from 'shared/ui/Text/Text'

interface LoginFormProps {
  className?: string
}

export const LoginForm: React.FC<LoginFormProps> = (props) => {
  const { className } = props
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const {
    password,
    username,
    isLoading,
    error,
  } = useSelector(getLoginState)

  const onChangeUsername = React.useCallback((value: string) => {
    dispatch(loginActions.setUsername(value))
  }, [dispatch])

  const onChangePassword = React.useCallback((value: string) => {
    dispatch(loginActions.setPassword(value))
  }, [dispatch])

  const onLoginClick = React.useCallback(() => {
    dispatch(loginByUsername({
      password,
      username,
    }))
  }, [dispatch, password, username])

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Text
        title={t('modal-auth-title')}
        className={cls.title}
      />

      {error && (
        <Text
          text={t('error-auth')}
          theme={TextTheme.ERROR}
          className={cls.error}
        />
      )}

      <Input
        placeholder={t('input-login')}
        type={'text'}
        className={cls.input}
        onChange={onChangeUsername}
        value={username}
      />
      <Input
        placeholder={t('input-password')}
        type={'text'}
        className={cls.input}
        onChange={onChangePassword}
        value={password}
      />
      <Button
        theme={ThemeButton.OUTLINE}
        className={cls.inputBtn}
        onClick={onLoginClick}
        disabled={isLoading}
      >
        {t('btn-auth')}
      </Button>
    </div>
  )
}
