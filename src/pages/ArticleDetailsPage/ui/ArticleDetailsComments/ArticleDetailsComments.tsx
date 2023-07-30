import React, { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Text, TextSize } from 'shared/ui/Text/Text'
import { AddCommentForm } from 'features/addCommentForm'
import { CommentList } from 'entities/Comment'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
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
      </div>
    )
  })
