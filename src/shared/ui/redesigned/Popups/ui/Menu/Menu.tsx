import { Menu as HMenu } from '@headlessui/react'
import React, { Fragment, memo } from 'react'
import { type Additional, classNames } from '../../../../../lib/classNames/classNames'
import { AppLink } from '../../../AppLink/AppLink'
import popupsCls from '../../styles/popup.module.scss'
import cls from './Menu.module.scss'
import { type DirectionType } from '@/shared/types/ui'

export interface MenuItem {
  content: React.ReactNode
  disabled?: boolean
  onClick?: () => void
  href?: string
}

interface MenuProps {
  className?: string
  items: MenuItem[]
  trigger: React.ReactNode
  direction?: DirectionType
}

export const Menu: React.FC<MenuProps> = memo((props: MenuProps) => {
  const {
    className,
    items,
    trigger,
    direction = 'bottom-left',
  } = props

  const additionalOptions: Additional = [
    popupsCls[`direction-${direction}`],
    popupsCls.menu,
  ]

  return (
    <HMenu
      as={'div'}
      className={classNames(cls.Menu, {}, [className])}
    >
      <HMenu.Button as={'div'} className={cls.button}>
        {trigger}
      </HMenu.Button>
      <HMenu.Items className={classNames(cls.items, {}, additionalOptions)}>
        {
          items.map((item) => {
            const content = ({ active }: { active: boolean }) => (
              <button
                type={'button'}
                disabled={item?.disabled}
                onClick={item?.onClick}
                className={
                  classNames(
                    cls.item,
                    {
                      [popupsCls.active]: active,
                      [popupsCls.disabled]: item.disabled,
                    }
                  )
                }
              >
                {item.content}
              </button>
            )

            if (item.href) {
              return (
                <HMenu.Item
                  key={item.href}
                  as={AppLink}
                  to={item.href}
                  disabled={item.disabled}
                >
                  {content}
                </HMenu.Item>
              )
            }

            return (
              <HMenu.Item
                key={String(item.content)}
                as={Fragment}
                disabled={item.disabled}
              >
                {content}
              </HMenu.Item>
            )
          })
        }
      </HMenu.Items>
    </HMenu>
  )
})
