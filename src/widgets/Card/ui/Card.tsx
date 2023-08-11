import React, { type HTMLAttributes, memo } from 'react'
import cls from './Card.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'

export enum CardTheme {
  NORMAL = 'normal',
  OUTLINED = 'outlined'
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children: React.ReactNode
  theme?: CardTheme
}

export const Card: React.FC<CardProps> = memo((props: CardProps) => {
  const {
    className,
    children,
    theme = CardTheme.NORMAL,
    ...otherProps
  } = props

  return (
    <article
      className={classNames(cls.Card, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </article>
  )
})
