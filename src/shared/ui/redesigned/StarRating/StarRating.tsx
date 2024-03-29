import React, { memo } from 'react'
import { Icon } from '../Icon'
import cls from './StarRating.module.scss'
import StarIcon from '@/shared/assets/icons/star.svg'
import { classNames } from '@/shared/lib/classNames/classNames'

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

  const [currentStarCount, setCurrentStarCount] = React.useState(selectedStars)
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
          clickable
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
          data-testid={`star-rating-${star}`}
          data-selected={currentStarCount >= star}
        />
      ))}
    </div>
  )
})
