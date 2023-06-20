import React, { type ChangeEvent, memo, useMemo } from 'react'
import { classNames, type Mods } from 'shared/lib/classNames/classNames'
import cls from './Select.module.scss'

export interface SelectOption {
  value: string
  content: string
}

interface SelectProps {
  className?: string
  label?: string
  options?: SelectOption[]
  value?: string
  onChange?: (value: string) => void
  readonly?: boolean
}

export const Select: React.FC<SelectProps> = memo((props: SelectProps) => {
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
    onChange?.(e.target.value)
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
})
