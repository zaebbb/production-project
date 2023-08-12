import React, { memo } from 'react'
import cls from './StarRating.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import StarIcon from '@/shared/assets/icons/star.svg'
import { Icon } from '@/widgets/Icon/Icon'

interface StarRatingProps {
  className?: string
  onSelect?: (starsCount: number) => void
  size?: number
  selectedStars?: number
}

const stars = [1, 2, 3, 4, 5]

export const StarRating: React.FC<StarRatingProps> = memo((props: StarRatingProps) => {
  const {
    className,
    onSelect,
    size,
    selectedStars = 0,
  } = props

  const [currentStarCount, setCurrentStarCount] = React.useState(0)
  const [isSelected, setIsSelected] = React.useState(Boolean(selectedStars))

  const onHover = React.useCallback((starCount: number) => () => {
    if (!isSelected) {
      setCurrentStarCount(starCount)
    }
  }, [isSelected])

  const onLeave = React.useCallback(() => {
    if (!isSelected) {
      setCurrentStarCount(0)
    }
  }, [isSelected])

  const onClick = React.useCallback((starCount: number) => () => {
    if (!isSelected) {
      onSelect?.(starCount)
      setCurrentStarCount(starCount)
      setIsSelected(true)
    }
  }, [isSelected, onSelect])

  return (
    <div className={classNames(cls.StarRating, {}, [className])}>
      {stars.map((star) => (
        <Icon
          onMouseEnter={onHover(star)}
          onMouseLeave={onLeave}
          onClick={onClick(star)}
          key={star}
          Svg={StarIcon}
          className={
            classNames(
              cls['star-icon'],
              {
                [cls.hovered]: currentStarCount >= star,
                [cls.normal]: currentStarCount < star,
                [cls.selected]: isSelected,
              },
              []
            )
          }
          width={size}
          height={size}
        />
      ))}
    </div>
  )
})
