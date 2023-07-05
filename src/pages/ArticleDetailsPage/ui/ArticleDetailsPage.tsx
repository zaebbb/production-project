import React, { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleDetailsPage.module.scss'
import { useParams } from 'react-router-dom'
import { Text } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import { ArticleDetails } from 'entities/Article'
import { DynamicModuleLoader, type ReducerList } from 'shared/lib/DynamicModuleLoader'
import { articleDetailsCommentsReducer } from '../model/slice/articleDetailsComments'
import { useSelector } from 'react-redux'
import {
  getArticleComments,
  getArticleDetailsCommentIsLoading,
} from '../model/selectors/comments'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import {
  fetchCommentsArticleById,
} from '../model/services/fetchCommentsArticleById/fetchCommentsArticleById'
import { CommentList } from 'entities/Comment'

interface ArticleDetailsPageProps {
  className?: string
}

const reducers: ReducerList = {
  articleDetailsComments: articleDetailsCommentsReducer,
}

const ArticleDetailsPage: React.FC<ArticleDetailsPageProps> = (props: ArticleDetailsPageProps) => {
  const { className } = props
  const { id } = useParams<{ id: string }>()
  const { t } = useTranslation('article')
  const comments = useSelector(getArticleComments.selectAll)
  const commentsIsLoading = useSelector(getArticleDetailsCommentIsLoading)
  const dispatch = useAppDispatch()

  useInitialEffect(() => {
    dispatch(fetchCommentsArticleById(id))
  })

  if (!id) {
    return (
      <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        <Text title={t('article-not-found')} />
      </div>
    )
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        <ArticleDetails id={id} />
        <Text className={cls.commentTitle} title={t('article-comments')} />
        <CommentList
          comments={comments}
          isLoading={commentsIsLoading}
        />
      </div>
    </DynamicModuleLoader>
  )
}

export default memo(ArticleDetailsPage)
