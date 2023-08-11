import React from 'react'
import cls from './Loader.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'

interface LoaderProps {
  className?: string
}

export const Loader: React.FC<LoaderProps> = (props) => {
  const { className } = props

  return (
    <div className={classNames(cls['lds-ripple'], {}, [className])}>
      <div className={cls.ripple} />
      <div className={cls.ripple} />
    </div>
  )
}
