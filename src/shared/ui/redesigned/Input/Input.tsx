import React, { type InputHTMLAttributes, memo } from 'react'
import cls from './Input.module.scss'
import { classNames, type Mods } from '@/shared/lib/classNames/classNames'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readonly'>

interface InputProps extends HTMLInputProps {
  className?: string
  value?: string | number
  onChange?: (value: string) => void
  placeholder?: string
  autoFocus?: boolean
  readonly?: boolean
  addonLeft?: React.ReactNode
  addonRight?: React.ReactNode
}

export const Input: React.FC<InputProps> = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    readonly = false,
    addonLeft,
    addonRight,
    autoFocus,
    ...otherProps
  } = props

  const ref = React.useRef<HTMLInputElement>(null)

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    onChange?.(e.target.value)
  }

  const [isFocused, setIsFocused] = React.useState<boolean>(false)

  const mods: Mods = {
    [cls.readonly]: readonly,
    [cls.focused]: isFocused,
    [cls.withAddonLeft]: Boolean(addonLeft),
    [cls.withAddonRight]: Boolean(addonRight),
  }

  const onBlur = (): void => {
    setIsFocused(false)
  }

  const onFocus = (): void => {
    setIsFocused(true)
  }

  React.useEffect((): void => {
    if (autoFocus) {
      setIsFocused(true)
      ref.current?.focus()
    }
  }, [autoFocus])

  return (
    <div className={classNames(cls.InputWrapper, mods, [className])}>
      {addonLeft && <div className={cls.addonLeft}>{addonLeft}</div>}
      <input
        ref={ref}
        className={cls.input}
        value={value}
        onChange={onChangeHandler}
        type={type}
        onBlur={onBlur}
        onFocus={onFocus}
        readOnly={readonly}
        placeholder={placeholder}
        {...otherProps}
      />
      {addonRight && <div className={cls.addonRight}>{addonRight}</div>}
    </div>
  )
})
