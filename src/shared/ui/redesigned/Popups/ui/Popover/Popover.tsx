import { Popover as HPopover } from '@headlessui/react'
import React, { memo } from 'react'
import { type Additional, classNames } from '../../../../../lib/classNames/classNames'
import { type DirectionType } from '../../../../../types/ui'
import popupsCls from '../../styles/popup.module.scss'
import cls from './Popover.module.scss'

interface PopoverProps {
  className?: string
  trigger: React.ReactNode
  direction?: DirectionType
  children: React.ReactNode
}

export const Popover: React.FC<PopoverProps> = memo((props: PopoverProps) => {
  const {
    className,
    trigger,
    direction = 'bottom-right',
    children,
  } = props

  const additionalOptions: Additional = [
    popupsCls[`direction-${direction}`],
    popupsCls.menu,
  ]

  return (
    <HPopover className={classNames(cls.Popover, {}, [className])}>
      <HPopover.Button as={'div'} className={cls.button}>
        {trigger}
      </HPopover.Button>

      <HPopover.Panel className={classNames(cls.items, {}, additionalOptions)}>
        {children}
      </HPopover.Panel>
    </HPopover>
  )
})
