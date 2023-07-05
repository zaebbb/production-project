import React, { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './CommentList.module.scss'
import { type Comment } from '../../model/types/comment'
import { CommentCard } from 'entities/Comment/ui/CommentCard/CommentCard'
import { Text } from 'shared/ui/Text/Text'

interface CommentListProps {
  className?: string
  comments?: Comment[]
  isLoading?: boolean
}

export const CommentList: React.FC<CommentListProps> = memo((props: CommentListProps) => {
  const {
    className,
    comments,
    isLoading,
  } = props
  const { t } = useTranslation('article')

  return (
    <div className={classNames(cls.CommentList, {}, [className])}>
      {
        comments?.length
          ? comments.map(comment => (
            <CommentCard
              key={comment.id}
              className={cls.comment}
              isLoading={isLoading}
              comment={comment}
            />
          ))
          : <Text text={t('comments-not-found')} />
      }
    </div>
  )
})
