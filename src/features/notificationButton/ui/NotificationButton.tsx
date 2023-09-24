import React, { memo } from 'react'
import { BrowserView, MobileView } from 'react-device-detect'
import { Drawer } from 'src/shared/ui/redesigned/Drawer'
import cls from './NotificationButton.module.scss'
import { NotificationList } from '@/entities/Notification'
import NotificationIconDeprecated from '@/shared/assets/icons/norification.svg'
import NotificationIcon from '@/shared/assets/icons/redesigned/NotificationIcon.svg'
import { ToggleFeatures } from '@/shared/lib/features'
import { Icon as IconDeprecated } from '@/shared/ui/Icon'
import { Popover as PopoverDeprecated } from '@/shared/ui/Popups/ui/Popover/Popover'
import { Button as ButtonDeprecated, ThemeButton } from '@/shared/ui/deprecated/Button'
import { Icon } from '@/shared/ui/redesigned/Icon'
import { Popover } from '@/shared/ui/redesigned/Popups/ui/Popover/Popover'

interface NotificationButtonProps {
  className?: string
}

export const NotificationButton: React.FC<NotificationButtonProps> =
  memo((props: NotificationButtonProps) => {
    const { className } = props

    const [isOpen, setIsOpen] = React.useState(false)

    const onOpenDrawer = React.useCallback(() => {
      setIsOpen(true)
    }, [])

    const onCloseDrawer = React.useCallback(() => {
      setIsOpen(false)
    }, [])

    const trigger = (
      <ToggleFeatures
        feature={'isAppRedesigned'}
        off={
          <ButtonDeprecated
            theme={ThemeButton.CLEAR}
            onClick={onOpenDrawer}
          >
            <IconDeprecated Svg={NotificationIconDeprecated} isInverted />
          </ButtonDeprecated>
        }
        on={
          <Icon
            width={20}
            height={20}
            clickable
            Svg={NotificationIcon}
            onClick={onOpenDrawer}
          />
        }
      />
    )

    return (
      <div>
        <BrowserView>
          <ToggleFeatures
            feature={'isAppRedesigned'}
            off={
              <PopoverDeprecated
                className={className}
                trigger={trigger}
              >
                <NotificationList className={cls.notifications} />
              </PopoverDeprecated>
            }
            on={
              <Popover
                className={className}
                trigger={trigger}
              >
                <NotificationList className={cls.notifications} />
              </Popover>
            }
          />
        </BrowserView>
        <MobileView>
          {trigger}
          <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
            <NotificationList />
          </Drawer>
        </MobileView>
      </div>
    )
  })
