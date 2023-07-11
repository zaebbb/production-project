import React, { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleDetailsPage.module.scss'
import { useNavigate, useParams } from 'react-router-dom'
import { Text } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import { ArticleDetails } from 'entities/Article'
import { DynamicModuleLoader, type ReducerList } from 'shared/lib/DynamicModuleLoader'
import { articleDetailsCommentsReducer } from '../model/slice/articleDetailsComments'
import { useSelector } from 'react-redux'
import { getArticleComments, getArticleDetailsCommentIsLoading } from '../model/selectors/comments'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import {
  fetchCommentsArticleById,
} from '../model/services/fetchCommentsArticleById/fetchCommentsArticleById'
import { CommentList } from 'entities/Comment'
import { addCommentForArticle } from '../model/services/addCommentForArticle/addCommentForArticle'
import { AddCommentForm } from 'features/addCommentForm'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { Page } from 'shared/ui/Page/Page'

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
  const navigate = useNavigate()

  const onBackToList = React.useCallback(() => {
    navigate(RoutePath.articles)
  }, [navigate])

  const onSendComment = React.useCallback((text: string) => {
    dispatch(addCommentForArticle(text))
  }, [dispatch])

  useInitialEffect(() => {
    dispatch(fetchCommentsArticleById(id))
  })

  if (!id) {
    return (
      <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        <Text title={t('article-not-found')} />
      </Page>
    )
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        <Button
          theme={ThemeButton.OUTLINE}
          onClick={onBackToList}
        >
          {t('button-back')}
        </Button>

        <ArticleDetails id={id} />
        <Text className={cls.commentTitle} title={t('article-comments')} />
        <AddCommentForm
          onSendComment={onSendComment}
        />
        <CommentList
          comments={comments}
          isLoading={commentsIsLoading}
        />
      </Page>
    </DynamicModuleLoader>
  )
}

export default memo(ArticleDetailsPage)
