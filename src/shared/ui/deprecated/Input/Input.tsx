import React, { type InputHTMLAttributes, memo } from 'react'
import cls from './Input.module.scss'
import { classNames, type Mods } from '@/shared/lib/classNames/classNames'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readonly'>

interface InputProps extends HTMLInputProps {
  className?: string
  value?: string | number
  onChange?: (value: string) => void
  placeholder?: string
  readonly?: boolean
}

/**
 * Данный компонент устарел, используйте новый UI-kit
 * @deprecated
 * */
export const Input: React.FC<InputProps> = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    readonly = false,
    ...otherProps
  } = props

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    onChange?.(e.target.value)
  }

  const mods: Mods = {
    [cls.readonly]: readonly,
  }

  return (
    <input
      className={classNames(cls.Input, mods, [className])}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChangeHandler}
      readOnly={readonly}
      {...otherProps}
    />
  )
})
