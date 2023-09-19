import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import cls from './ArticleFilters.module.scss'
import { type ArticleSortField, type ArticleType } from '@/entities/Article'
import { ArticleSortSelector } from '@/features/ArticleSortSelector'
import { ArticleTabs } from '@/features/ArticleTabs'
import SearchIcon from '@/shared/assets/icons/redesigned/SearchIcon.svg'
import { classNames } from '@/shared/lib/classNames/classNames'
import { type SortOrder } from '@/shared/types/role'
import { Card } from '@/shared/ui/redesigned/Card'
import { Icon } from '@/shared/ui/redesigned/Icon'
import { Input } from '@/shared/ui/redesigned/Input'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { type TabItem } from '@/shared/ui/redesigned/Tabs'

interface ArticleFiltersProps {
  className?: string
  sort: ArticleSortField
  order: SortOrder
  onChangeSort: (newSort: ArticleSortField) => void
  onChangeOrder: (newOrder: SortOrder) => void
  type: ArticleType
  onChangeType: (tab: TabItem) => void
  search: string
  onChangeSearch: (value: string) => void
}

export const ArticleFilters: React.FC<ArticleFiltersProps> = memo((props: ArticleFiltersProps) => {
  const {
    className,
    sort,
    order,
    onChangeSort,
    onChangeOrder,
    type,
    onChangeType,
    search,
    onChangeSearch,
  } = props
  const { t } = useTranslation()

  return (
    <Card
      padding={'24'}
      className={classNames(cls.ArticleFilters, {}, [className])}
    >
      <VStack gap={32}>
        <Input
          placeholder={t('article-search')}
          value={search}
          onChange={onChangeSearch}
          className={cls.search}
          addonLeft={<Icon Svg={SearchIcon} />}
        />
        <ArticleTabs
          className={cls.types}
          type={type}
          onChangeType={onChangeType}
        />
        <ArticleSortSelector
          sort={sort}
          order={order}
          onChangeSort={onChangeSort}
          onChangeOrder={onChangeOrder}
        />
      </VStack>
    </Card>
  )
})
