import React, { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { TextSize, Text } from 'shared/ui/Text/Text'
import { Card, CardTheme } from 'widgets/Card/ui/Card'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { type Notification } from '../../model/types/notification'
import cls from './NotificationItem.module.scss'

interface NotificationItemProps {
  className?: string
  notification: Notification
}

export const NotificationItem: React.FC<NotificationItemProps> =
  memo((props: NotificationItemProps) => {
    const {
      className,
      notification,
    } = props

    const contentNotification = (
      <Card
        theme={CardTheme.OUTLINED}
        className={classNames(cls.NotificationItem, {}, [className])}
      >
        <Text
          size={TextSize.S}
          title={notification.title}
          text={notification.description}
        />
      </Card>
    )

    return notification.href ? (
      <AppLink to={notification.href} target={'_blank'}>
        {contentNotification}
      </AppLink>
    ) : contentNotification
  })
