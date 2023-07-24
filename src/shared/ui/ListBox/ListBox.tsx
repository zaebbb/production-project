import React, { Fragment, memo } from 'react'
import { type Additional, classNames } from 'shared/lib/classNames/classNames'
import cls from './ListBox.module.scss'
import { Listbox as HListBox } from '@headlessui/react'
import { HStack } from '../Stack'
import { Button, ThemeButton } from '../Button/Button'

export interface ListBoxItem {
  value: string
  content: React.ReactNode
  disabled?: boolean
}

type DropDownDirection = 'top' | 'bottom'

interface ListBoxProps {
  className?: string
  options?: ListBoxItem[]
  value?: string
  onChange: <T extends string>(value: T) => void
  readonly?: boolean
  label?: string
  direction?: DropDownDirection
}

export const ListBox: React.FC<ListBoxProps> = memo((props: ListBoxProps) => {
  const {
    className,
    options,
    value,
    onChange,
    readonly,
    label,
    direction = 'bottom',
  } = props

  const additional: Additional = [
    cls[`direction-${direction}`],
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
                        [cls.active]: active,
                        [cls.disabled]: option.disabled,
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
