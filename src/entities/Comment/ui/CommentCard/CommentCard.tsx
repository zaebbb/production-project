import React, { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './CommentCard.module.scss'
import { type Comment } from '../../model/types/comment'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import NoProfile from 'shared/assets/icons/profile.png'
import { Text } from 'shared/ui/Text/Text'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

interface CommentCardProps {
  className?: string
  comment?: Comment
  isLoading?: boolean
}

export const CommentCard: React.FC<CommentCardProps> = memo((props: CommentCardProps) => {
  const {
    className,
    comment,
    isLoading,
  } = props

  if (isLoading) {
    return (
      <div className={classNames(cls.CommentCard, {}, [className])}>
        <div className={cls.author}>
          <Skeleton
            className={cls.avatar}
            border={'50%'}
            width={50}
            height={50}
          />
          <Skeleton width={200} height={30} />
        </div>
        <Skeleton width={450} height={30} />
      </div>
    )
  }

  if (!comment) {
    return null
  }

  return (
    <div className={classNames(cls.CommentCard, {}, [className])}>
      <AppLink to={`${RoutePath.profile}${comment.user.id}`} className={cls.author}>
        <Avatar
          src={
            comment.user.avatar
              ? comment.user.avatar : NoProfile
          }
          size={40}
          className={cls.avatar}
        />
        <Text text={comment.user.username} />
      </AppLink>
      <Text text={comment.text} />
    </div>
  )
})
