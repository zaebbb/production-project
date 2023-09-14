import React, { memo } from 'react'
import { saveJsonSettings } from '@/entities/User'
import ThemeIcon from '@/shared/assets/icons/redesigned/Theme.svg'
import ThemeDeprecatedIcon from '@/shared/assets/icons/theme-dark.svg'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ToggleFeatures } from '@/shared/lib/features'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme'
import { Icon as IconDeprecated } from '@/shared/ui/Icon'
import { Button } from '@/shared/ui/deprecated/Button'
import { Icon } from '@/shared/ui/redesigned/Icon'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = memo((props: ThemeSwitcherProps) => {
  const { className } = props
  const { toggleTheme } = useTheme()
  const dispatch = useAppDispatch()

  const onToggleTheme = React.useCallback(() => {
    toggleTheme(newTheme => {
      dispatch(saveJsonSettings({ theme: newTheme }))
    })
  }, [dispatch, toggleTheme])

  return (
    <ToggleFeatures
      feature={'isAppRedesigned'}
      off={
        <Button
          onClick={onToggleTheme}
          className={classNames('', {}, [className])}
        >
          <IconDeprecated Svg={ThemeDeprecatedIcon} width={40} height={40} isInverted />
        </Button>
      }
      on={
        <Icon
          width={20}
          height={20}
          clickable
          onClick={onToggleTheme}
          Svg={ThemeIcon}
        />
      }
    />
  )
})
