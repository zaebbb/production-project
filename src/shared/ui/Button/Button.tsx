import React, { type ButtonHTMLAttributes } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'

export enum ThemeButton {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
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

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme = ThemeButton.CLEAR,
    square,
    size,
    disabled = false,
    ...otherProps
  } = props

  const mods: Record<string, boolean> = {
    [cls.square]: square,
  }

  const additional: string[] = [
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
}
