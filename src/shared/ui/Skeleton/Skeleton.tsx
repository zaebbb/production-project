import React, { type CSSProperties, memo } from 'react'
import cls from './Skeleton.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'

interface SkeletonProps {
  className?: string
  width?: number | string
  height?: number | string
  border?: string
}

export const Skeleton: React.FC<SkeletonProps> = memo((props: SkeletonProps) => {
  const {
    className,
    width,
    height,
    border = '8px',
  } = props

  const styles: CSSProperties = {
    width,
    height,
    borderRadius: border,
  }

  return (
    <div
      className={classNames(cls.Skeleton, {}, [className])}
      style={styles}
    />
  )
})
