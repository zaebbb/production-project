import React, { memo } from 'react'
import { Popover } from 'shared/ui/Popups'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import NotificationIcon from 'shared/assets/icons/norification.svg'
import { Icon } from 'widgets/Icon/Icon'
import { NotificationList } from 'entities/Notification'
import cls from './NotificationButton.module.scss'

interface NotificationButtonProps {
  className?: string
}

export const NotificationButton: React.FC<NotificationButtonProps> =
  memo((props: NotificationButtonProps) => {
    const { className } = props

    return (
      <Popover
        className={className}
        trigger={
          <Button
            theme={ThemeButton.CLEAR}
          >
            <Icon Svg={NotificationIcon} isInverted />
          </Button>
        }
      >
        <NotificationList className={cls.notifications} />
      </Popover>
    )
  })
