import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Loader.module.scss'

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
