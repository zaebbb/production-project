import React, { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './ArticlePageFilter.module.scss'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import {
  getArticlePageOrder,
  getArticlePageSearch,
  getArticlePageSort,
  getArticlePageType,
  getArticlePageView,
} from '../../model/selectors/articlePageSelectors'
import { articlesPageActions } from '../../model/slice/articlePageSlice'
import { fetchArticles } from '../../model/services/fetchArticles/fetchArticles'
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce'
import {
  type ArticleSortField,
  ArticleSortSelector,
  ArticleTabs,
  type ArticleType,
  type ArticleView,
} from 'entities/Article'
import { ArticleViewSelector } from 'features/ArticleViewSelector'
import { Input } from 'shared/ui/Input/Input'
import { type SortOrder } from 'shared/types'
import { type TabItem } from 'shared/ui/Tabs/Tabs'

interface ArticlePageFilterProps {
  className?: string
}

export const ArticlePageFilter: React.FC<ArticlePageFilterProps> =
  memo((props: ArticlePageFilterProps) => {
    const { className } = props
    const { t } = useTranslation('article')
    const dispatch = useAppDispatch()
    const view = useSelector(getArticlePageView)
    const sort = useSelector(getArticlePageSort)
    const order = useSelector(getArticlePageOrder)
    const search = useSelector(getArticlePageSearch)
    const type = useSelector(getArticlePageType)

    const fetchData = React.useCallback(() => {
      dispatch(articlesPageActions.setPage(1))
      dispatch(fetchArticles({
        replace: true,
      }))
    }, [dispatch])

    const debounceFetchData = useDebounce(fetchData, 500)

    const onChangeView = React.useCallback((view: ArticleView) => {
      dispatch(articlesPageActions.setView(view))
      fetchData()
    }, [dispatch, fetchData])

    const onChangeSort = React.useCallback((sort: ArticleSortField) => {
      dispatch(articlesPageActions.setSort(sort))
      fetchData()
    }, [dispatch, fetchData])

    const onChangeOrder = React.useCallback((order: SortOrder) => {
      dispatch(articlesPageActions.setOrder(order))
      fetchData()
    }, [dispatch, fetchData])

    const onChangeSearch = React.useCallback((value: string) => {
      dispatch(articlesPageActions.setSearch(value))
      debounceFetchData()
    }, [debounceFetchData, dispatch])

    const onChangeType = React.useCallback((tab: TabItem) => {
      dispatch(articlesPageActions.setType(tab.value as ArticleType))
      fetchData()
    }, [dispatch, fetchData])

    return (
      <div className={classNames(cls.ArticlePageFilter, {}, [className])}>
        <div className={cls.sortWrapper}>
          <ArticleSortSelector
            sort={sort}
            order={order}
            onChangeSort={onChangeSort}
            onChangeOrder={onChangeOrder}
          />
          <ArticleViewSelector
            view={view}
            onViewClick={onChangeView}
          />
        </div>
        <Input
          placeholder={t('article-search')}
          value={search}
          onChange={onChangeSearch}
          className={cls.search}
        />
        <ArticleTabs
          className={cls.types}
          type={type}
          onChangeType={onChangeType}
        />
      </div>
    )
  })