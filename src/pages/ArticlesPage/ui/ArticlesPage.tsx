import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticlesPage.module.scss'
import { ArticleList, type ArticleView } from 'entities/Article'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import {
  getArticlePageIsLoading,
  getArticlePageView,
  getArticles,
} from '../model/selectors/articlePageSelectors'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { fetchArticles } from '../model/services/fetchArticles/fetchArticles'
import { articlesPageActions, articlesPageReducer } from '../model/slice/articlePageSlice'
import { DynamicModuleLoader, type ReducerList } from 'shared/lib/DynamicModuleLoader'
import { ArticleViewSelector } from 'features/ArticleViewSelector'

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

  useInitialEffect(() => {
    dispatch(fetchArticles())
    dispatch(articlesPageActions.initState())
  })

  const onChangeView = React.useCallback((view: ArticleView) => {
    dispatch(articlesPageActions.setView(view))
  }, [dispatch])

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(cls.ArticlesPage, {}, [className])}>
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
        <ArticleList
          view={view}
          articles={articles}
          isLoading={isLoading}
        />
      </div>
    </DynamicModuleLoader>
  )
}

export default ArticlesPage
