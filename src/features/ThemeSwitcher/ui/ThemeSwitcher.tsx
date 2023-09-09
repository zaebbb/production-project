import React, { memo } from 'react'
import { saveJsonSettings } from '@/entities/User'
import DarkIcon from '@/shared/assets/icons/theme-dark.svg'
import LightIcon from '@/shared/assets/icons/theme-light.svg'
import { Theme } from '@/shared/const'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme'
import { Button } from '@/shared/ui/Button'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = memo((props: ThemeSwitcherProps) => {
  const { className } = props
  const { theme, toggleTheme } = useTheme()
  const dispatch = useAppDispatch()

  const onToggleTheme = React.useCallback(() => {
    toggleTheme(newTheme => {
      dispatch(saveJsonSettings({
        theme: newTheme,
      }))
    })
  }, [dispatch, toggleTheme])

  return (
    <Button
      onClick={onToggleTheme}
      className={classNames('', {}, [className])}
    >
      {
        theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />
      }
    </Button>
  )
})
