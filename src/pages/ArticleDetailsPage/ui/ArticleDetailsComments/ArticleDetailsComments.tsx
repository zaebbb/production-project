import React, { memo, Suspense } from 'react'
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
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import { Loader } from '@/shared/ui/Loader'
import { Text, TextSize } from '@/shared/ui/Text'

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
      <div className={classNames(cls.ArticleDetailsComments, {}, [className])}>
        <Suspense fallback={<Loader />}>
          <Text
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
        </Suspense>
      </div>
    )
  })
