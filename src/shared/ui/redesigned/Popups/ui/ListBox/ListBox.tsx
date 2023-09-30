import { Listbox as HListBox } from '@headlessui/react'
import React, { Fragment } from 'react'
import { Button } from '../../../Button/Button'
import { Icon } from '../../../Icon'
import { HStack } from '../../../Stack'
import { Text } from '../../../Text/Text'
import popupsCls from '../../styles/popup.module.scss'
import cls from './ListBox.module.scss'
import ArrowBottom from '@/shared/assets/icons/redesigned/ArrowBottomListBox.svg'
import { type Additional, classNames } from '@/shared/lib/classNames/classNames'
import { TypedMemo } from '@/shared/lib/components/TypedMemo'
import { type DirectionType } from '@/shared/types/ui'

export interface ListBoxItem<T extends string> {
  value: T
  content: React.ReactNode
  disabled?: boolean
}

interface ListBoxProps<T extends string> {
  className?: string
  options?: Array<ListBoxItem<T>>
  value?: T
  defaultValue?: T
  onChange: (value: T) => void
  readonly?: boolean
  label?: string
  direction?: DirectionType
}

export const ListBoxComponent = <T extends string>(props: ListBoxProps<T>) => {
  const {
    className,
    options,
    value,
    defaultValue,
    onChange,
    readonly,
    label,
    direction = 'bottom-left',
  } = props

  const selectedItem = React.useMemo(() => {
    return options?.find(option => option.value === value)
  }, [options, value])

  const additional: Additional = [
    popupsCls[`direction-${direction}`],
    popupsCls.menu,
  ]

  return (
    <HStack
      align={'center'}
      gap={4}
      className={classNames(cls.ListBox, { [cls.readonly]: readonly }, [className])}
    >
      {label && <Text text={label} />}
      <HListBox
        as={'div'}
        className={cls.list}
        value={value}
        onChange={onChange}
        disabled={readonly}
      >
        <HListBox.Button as={React.Fragment}>
          <Button
            variant={'filled'}
            disabled={readonly}
            className={cls.trigger}
            addonRight={<Icon Svg={ArrowBottom} />}
          >
            {selectedItem?.content ?? defaultValue}
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
                        [popupsCls.selected]: selected,
                      }
                    )
                  }
                >
                  {option.content}
                </li>
              )}
            </HListBox.Option>
          ))}
        </HListBox.Options>
      </HListBox>
    </HStack>
  )
}

export const ListBox = TypedMemo(ListBoxComponent)
