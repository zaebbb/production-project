import React, { type CSSProperties, memo, useMemo } from 'react'
import { classNames, type Mods } from 'shared/lib/classNames/classNames'
import cls from './Avatar.module.scss'

export enum AvatarSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large'
}

interface AvatarProps {
  className?: string
  src?: string
  alt?: string
  size?: number
  sizeType?: AvatarSize
}

export const Avatar: React.FC<AvatarProps> = memo((props: AvatarProps) => {
  const {
    className,
    src,
    alt = '',
    size,
    sizeType = AvatarSize.MEDIUM,
  } = props

  const styles = useMemo<CSSProperties>(() => ({
    width: size || 0,
    height: size || 0,
  }), [size])

  const mods: Mods = {
    [cls[sizeType]]: sizeType,
  }

  return (
    <img
      className={classNames(
        cls.Avatar,
        mods,
        [className]
      )}
      src={src}
      alt={alt}
      style={size ? styles : {}}
    />
  )
})
