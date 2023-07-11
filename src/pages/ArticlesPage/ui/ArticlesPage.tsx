import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticlesPage.module.scss'
import { ArticleList, type ArticleView } from 'entities/Article'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import {
  getArticlePageError,
  getArticlePageIsLoading,
  getArticlePageView,
  getArticles,
} from '../model/selectors/articlePageSelectors'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { fetchArticles } from '../model/services/fetchArticles/fetchArticles'
import { articlesPageActions, articlesPageReducer } from '../model/slice/articlePageSlice'
import { DynamicModuleLoader, type ReducerList } from 'shared/lib/DynamicModuleLoader'
import { ArticleViewSelector } from 'features/ArticleViewSelector'
import { Page } from 'shared/ui/Page/Page'
import { useTranslation } from 'react-i18next'
import {
  FetchNextArticlePage,
} from '../model/services/fetchNextArticlePage/fetchNextArticlePage'
import { Text, TextTheme } from 'shared/ui/Text/Text'

interface ArticlesPageProps {
  className?: string
}

const reducers: ReducerList = {
  articlesPage: articlesPageReducer,
}

const ArticlesPage: React.FC<ArticlesPageProps> = (props: ArticlesPageProps) => {
  const { className } = props
  const dispatch = useAppDispatch()
  const articles = useSelector(getArticles.selectAll)
  const isLoading = useSelector(getArticlePageIsLoading)
  const view = useSelector(getArticlePageView)
  const error = useSelector(getArticlePageError)
  const { t } = useTranslation('article')

  useInitialEffect(() => {
    dispatch(articlesPageActions.initState())
    dispatch(fetchArticles({
      page: 1,
    }))
  })

  const onLoadNextPage = React.useCallback(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(FetchNextArticlePage())
    }
  }, [dispatch])

  const onChangeView = React.useCallback((view: ArticleView) => {
    dispatch(articlesPageActions.setView(view))
  }, [dispatch])

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page
        onScrollEnd={onLoadNextPage}
        className={classNames(cls.ArticlesPage, {}, [className])}
      >
        {
          error && (
            <Text title={t('error-load-article-data')} theme={TextTheme.ERROR} />
          )
        }
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
        <ArticleList
          view={view}
          articles={articles}
          isLoading={isLoading}
        />
      </Page>
    </DynamicModuleLoader>
  )
}

export default ArticlesPage
