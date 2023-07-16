import React, { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticlesPage.module.scss'
import { ArticleList } from 'entities/Article'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import {
  getArticlePageError,
  getArticlePageIsLoading,
  getArticlePageView,
  getArticles,
} from '../../model/selectors/articlePageSelectors'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { articlesPageReducer } from '../../model/slice/articlePageSlice'
import { DynamicModuleLoader, type ReducerList } from 'shared/lib/DynamicModuleLoader'
import { Page } from 'widgets/Page'
import { useTranslation } from 'react-i18next'
import {
  FetchNextArticlePage,
} from '../../model/services/fetchNextArticlePage/fetchNextArticlePage'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { ArticlePageMounted } from '../../model/services/articlePageMounted/articlePageMounted'
import { useSearchParams } from 'react-router-dom'
import { ArticlePageFilter } from 'pages/ArticlesPage/ui/ArticlePageFilter/ArticlePageFilter'

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
  const [searchParams] = useSearchParams()

  useInitialEffect(() => {
    dispatch(ArticlePageMounted({
      urlSearchParams: searchParams,
    }))
  })

  const onLoadNextPage = React.useCallback(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(FetchNextArticlePage())
    }
  }, [dispatch])

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page
        onScrollEnd={onLoadNextPage}
        className={classNames(cls.ArticlesPage, {}, [className])}
      >
        {
          error && (
            <Text title={t('error-load-article-data')} theme={TextTheme.ERROR} />
          )
        }
        <ArticlePageFilter />
        <ArticleList
          view={view}
          className={cls.list}
          articles={articles}
          isLoading={isLoading}
        />
      </Page>
    </DynamicModuleLoader>
  )
}

export default memo(ArticlesPage)
