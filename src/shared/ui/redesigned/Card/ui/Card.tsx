import React, { type HTMLAttributes, memo } from 'react'
import cls from './Card.module.scss'
import { type Additional, classNames, type Mods } from '@/shared/lib/classNames/classNames'

export type CardVariant = 'normal' | 'outlined' | 'light'

export type CardPadding = '0' | '8' | '16' | '24'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children: React.ReactNode
  variant?: CardVariant
  padding?: CardPadding
  isMax?: boolean
}

const mapPaddingToClass: Record<CardPadding, string> = {
  0: 'gap_0',
  8: 'gap_8',
  16: 'gap_16',
  24: 'gap_24',
}

export const Card: React.FC<CardProps> = memo((props: CardProps) => {
  const {
    className,
    children,
    variant = 'normal',
    isMax = false,
    padding = '8',
    ...otherProps
  } = props

  const mods: Mods = {
    [cls.max]: isMax,
  }

  const additional: Additional = [
    className,
    cls[variant],
    cls[mapPaddingToClass[padding]],
  ]

  return (
    <article
      className={classNames(cls.Card, mods, additional)}
      {...otherProps}
    >
      {children}
    </article>
  )
})
