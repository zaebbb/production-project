import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import {
  getArticleComments,
  getArticleDetailsCommentIsLoading,
} from '../../model/selectors/comments'
import {
  addCommentForArticle,
} from '../../model/services/addCommentForArticle/addCommentForArticle'
import {
  fetchCommentsArticleById,
} from '../../model/services/fetchCommentsArticleById/fetchCommentsArticleById'
import cls from './ArticleDetailsComments.module.scss'
import { CommentList } from '@/entities/Comment'
import { AddCommentForm } from '@/features/addCommentForm'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ToggleFeatures } from '@/shared/lib/features'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'

interface ArticleDetailsCommentsProps {
  className?: string
  id: string
}

export const ArticleDetailsComments: React.FC<ArticleDetailsCommentsProps> =
  memo((props: ArticleDetailsCommentsProps) => {
    const {
      className,
      id,
    } = props
    const { t } = useTranslation('article')
    const comments = useSelector(getArticleComments.selectAll)
    const commentsIsLoading = useSelector(getArticleDetailsCommentIsLoading)
    const dispatch = useAppDispatch()

    const onSendComment = React.useCallback((text: string) => {
      dispatch(addCommentForArticle(text))
    }, [dispatch])

    useInitialEffect(() => {
      dispatch(fetchCommentsArticleById(id))
    })

    return (
      <ToggleFeatures
        feature={'isAppRedesigned'}
        off={
          <div className={classNames(cls.ArticleDetailsComments, {}, [className])}>
            <TextDeprecated
              size={TextSize.L}
              className={cls.commentTitle}
              title={t('article-comments')}
            />
            <AddCommentForm
              onSendComment={onSendComment}
            />
            <CommentList
              comments={comments}
              isLoading={commentsIsLoading}
            />
          </div>
        }
        on={
          <VStack className={classNames('', {}, [className])}>
            <Text
              size={'l'}
              className={cls.commentTitle}
              title={t('article-comments')}
            />
            <AddCommentForm
              onSendComment={onSendComment}
            />
            <CommentList
              comments={comments}
              isLoading={commentsIsLoading}
            />
          </VStack>
        }
      />

    )
  })
