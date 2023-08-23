import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import {
  getArticlePageError,
  getArticlePageIsLoading,
  getArticlePageView,
  getArticles,
} from '../../model/selectors/articlePageSelectors'
import { ArticlePageMounted } from '../../model/services/articlePageMounted/articlePageMounted'
import cls from './ArticleInfinityList.module.scss'
import { ArticleList } from '@/entities/Article'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import { Text, TextTheme } from '@/shared/ui/Text'

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
