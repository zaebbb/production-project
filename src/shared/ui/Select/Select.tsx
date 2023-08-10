import React, { type ChangeEvent, useMemo } from 'react'
import { classNames, type Mods } from 'shared/lib/classNames/classNames'
import { TypedMemo } from 'shared/lib/components/TypedMemo'
import cls from './Select.module.scss'

export interface SelectOption<T extends string> {
  value: T
  content: string
}

interface SelectProps<T extends string> {
  className?: string
  label?: string
  options?: Array<SelectOption<T>>
  value?: T
  onChange?: (value: T) => void
  readonly?: boolean
}

const SelectComponent = <T extends string>(props: SelectProps<T>) => {
  const {
    className,
    label,
    options,
    value,
    onChange,
    readonly = false,
  } = props

  const optionList = useMemo(() => {
    return options?.map(option => (
      <option
        key={option.value}
        value={option.value}
        className={cls.option}
      >
        {option.content}
      </option>
    ))
  }, [options])

  const onChangeHandler = React.useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value as T)
  }, [onChange])

  const mods: Mods = {
    [cls.readonly]: readonly,
  }

  return (
    <select
      className={classNames(cls.select, mods, [className])}
      value={value}
      onChange={onChangeHandler}
      disabled={readonly}
    >
      {label && <option selected disabled value="">{label}</option>}
      {optionList}
    </select>
  )
}

export const Select = TypedMemo(SelectComponent)
