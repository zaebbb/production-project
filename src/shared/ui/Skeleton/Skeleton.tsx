import React, { type CSSProperties, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Skeleton.module.scss'

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
    border,
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
