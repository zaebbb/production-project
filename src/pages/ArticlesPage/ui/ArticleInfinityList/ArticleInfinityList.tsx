import React, { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { ArticleList } from 'entities/Article'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { useSelector } from 'react-redux'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useSearchParams } from 'react-router-dom'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { ArticlePageMounted } from '../../model/services/articlePageMounted/articlePageMounted'
import {
  getArticlePageError,
  getArticlePageIsLoading,
  getArticlePageView,
  getArticles,
} from '../../model/selectors/articlePageSelectors'
import cls from './ArticleInfinityList.module.scss'

interface ArticleInfinityListProps {
  className?: string
}

export const ArticleInfinityList: React.FC<ArticleInfinityListProps> =
  memo((props: ArticleInfinityListProps) => {
    const { className } = props
    const articles = useSelector(getArticles.selectAll)
    const isLoading = useSelector(getArticlePageIsLoading)
    const view = useSelector(getArticlePageView)
    const error = useSelector(getArticlePageError)
    const { t } = useTranslation('article')
    const [searchParams] = useSearchParams()
    const dispatch = useAppDispatch()

    useInitialEffect(() => {
      dispatch(ArticlePageMounted({
        urlSearchParams: searchParams,
      }))
    })

    return (
      <div className={classNames(cls.ArticleInfinityList, {}, [className])}>
        {
          error && (
            <Text title={t('error-load-article-data')} theme={TextTheme.ERROR} />
          )
        }
        <ArticleList
          view={view}
          className={cls.list}
          articles={articles}
          isLoading={isLoading}
        />
      </div>
    )
  })