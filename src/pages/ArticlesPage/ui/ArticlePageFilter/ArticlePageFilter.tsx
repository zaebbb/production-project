import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useArticleFilter } from '../../lib/hooks/useArticleFilter'
import cls from './ArticlePageFilter.module.scss'
import { ArticleSortSelector } from '@/features/ArticleSortSelector'
import { ArticleTabs } from '@/features/ArticleTabs'
import { ArticleViewSelector } from '@/features/ArticleViewSelector'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Input } from '@/shared/ui/deprecated/Input'

interface ArticlePageFilterProps {
  className?: string
}

export const ArticlePageFilter: React.FC<ArticlePageFilterProps> =
  memo((props: ArticlePageFilterProps) => {
    const { className } = props
    const { t } = useTranslation('article')

    const {
      sort,
      type,
      onChangeView,
      search,
      view,
      onChangeSort,
      onChangeType,
      order,
      onChangeSearch,
      onChangeOrder,
    } = useArticleFilter()

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
