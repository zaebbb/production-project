import { Listbox as HListBox } from '@headlessui/react'
import React, { Fragment, memo } from 'react'
import { HStack } from '../../../Stack'
import { Button, ThemeButton } from '../../../deprecated/Button/Button'
import popupsCls from '../../styles/popup.module.scss'
import cls from './ListBox.module.scss'
import { type Additional, classNames } from '@/shared/lib/classNames/classNames'
import { type DirectionType } from '@/shared/types/ui'

export interface ListBoxItem {
  value: string
  content: React.ReactNode
  disabled?: boolean
}

interface ListBoxProps {
  className?: string
  options?: ListBoxItem[]
  value?: string
  onChange: <T extends string>(value: T) => void
  readonly?: boolean
  label?: string
  direction?: DirectionType
}

/**
 * Данный компонент устарел, используйте новый UI-kit
 * @deprecated
 * */
export const ListBox: React.FC<ListBoxProps> = memo((props: ListBoxProps) => {
  const {
    className,
    options,
    value,
    onChange,
    readonly,
    label,
    direction = 'bottom-left',
  } = props

  const additional: Additional = [
    popupsCls[`direction-${direction}`],
  ]

  return (
    <HStack
      align={'center'}
      gap={4}
      className={classNames(cls.ListBox, { [cls.readonly]: readonly }, [className])}>
      <HListBox
        as={'div'}
        className={cls.list}
        value={value}
        onChange={onChange}
        disabled={readonly}
      >
        <HListBox.Button className={cls.trigger}>
          <Button
            disabled={readonly}
            theme={ThemeButton.OUTLINE}
            className={cls.button}
          >
            {value ?? label}
          </Button>
        </HListBox.Button>
        <HListBox.Options
          className={classNames(cls.options, {}, additional)}
        >
          {options?.map((option) => (
            <HListBox.Option
              key={option.value}
              as={Fragment}
              value={option.value}
              disabled={option.disabled}
            >
              {({ active, selected }) => (
                <li
                  className={
                    classNames(
                      cls.option,
                      {
                        [popupsCls.active]: active,
                        [popupsCls.disabled]: option.disabled,
                      }
                    )
                  }
                >
                  {selected && '!!!'}
                  {option.content}
                </li>
              )}
            </HListBox.Option>
          ))}
        </HListBox.Options>
      </HListBox>
    </HStack>
  )
})
