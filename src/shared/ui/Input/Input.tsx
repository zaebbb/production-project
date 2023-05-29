import React, { type InputHTMLAttributes, memo } from 'react'
import cls from './Input.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
  className?: string
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
}

export const Input: React.FC<InputProps> = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    ...otherProps
  } = props

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    onChange?.(e.target.value)
  }

  return (
    <input
      className={classNames(cls.Input, {}, [className])}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChangeHandler}
      {...otherProps}
    />
  )
})
