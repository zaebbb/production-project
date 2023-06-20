import React, { type ButtonHTMLAttributes, memo } from 'react'
import { type Additional, classNames, type Mods } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'

export enum ThemeButton {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  OUTLINE_RED = 'outline_red',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum SizeButton {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton
  square?: boolean
  size?: SizeButton
  disabled?: boolean
}

export const Button: React.FC<ButtonProps> = memo((props: ButtonProps) => {
  const {
    className,
    children,
    theme = ThemeButton.CLEAR,
    square,
    size = SizeButton.M,
    disabled = false,
    ...otherProps
  } = props

  const mods: Mods = {
    [cls.square]: square,
  }

  const additional: Additional = [
    className,
    cls[theme],
    cls[size],
  ]

  return (
    <button
      type={'button'}
      className={classNames(cls.Button, mods, additional)}
      {...otherProps}
      disabled={disabled}
    >
      {children}
    </button>
  )
})
