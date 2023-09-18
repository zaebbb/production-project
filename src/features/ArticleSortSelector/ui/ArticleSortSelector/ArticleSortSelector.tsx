import React, { memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import cls from './ArticleSortSelector.module.scss'
import { ArticleSortField } from '@/entities/Article'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ToggleFeatures } from '@/shared/lib/features'
import { type SortOrder } from '@/shared/types/role'
import { Select, type SelectOption } from '@/shared/ui/deprecated/Select'
import { ListBox } from '@/shared/ui/redesigned/Popups/ui/ListBox/ListBox'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'

interface ArticleSortSelectorProps {
  className?: string
  sort: ArticleSortField
  order: SortOrder
  onChangeSort: (newSort: ArticleSortField) => void
  onChangeOrder: (newOrder: SortOrder) => void
}

export const ArticleSortSelector: React.FC<ArticleSortSelectorProps> =
  memo((props: ArticleSortSelectorProps) => {
    const {
      className,
      sort,
      order,
      onChangeSort,
      onChangeOrder,
    } = props
    const { t } = useTranslation('article')

    const orderOptions = useMemo<Array<SelectOption<SortOrder>>>(() => [
      { content: t('article-sort-asc'), value: 'asc' },
      { content: t('article-sort-desc'), value: 'desc' },
    ], [t])

    const sortOptions = useMemo<Array<SelectOption<ArticleSortField>>>(() => [
      { content: t('article-sort-date'), value: ArticleSortField.CREATED_AT },
      { content: t('article-sort-title'), value: ArticleSortField.TITLE },
      { content: t('article-sort-views'), value: ArticleSortField.VIEWS },
    ], [t])

    return (
      <ToggleFeatures
        feature={'isAppRedesigned'}
        off={
          <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
            <Select<ArticleSortField>
              label={t('article-sorting')}
              options={sortOptions}
              onChange={onChangeSort}
              value={sort}
            />
            <Select<SortOrder>
              label={t('article-sorting')}
              options={orderOptions}
              onChange={onChangeOrder}
              value={order}
            />
          </div>
        }
        on={
          <div className={classNames(cls.ArticleSortSelectorRedesigned, {}, [className])}>
            <VStack gap={8}>
              <Text text={t('articles-sorting-to')} />
              <ListBox<ArticleSortField>
                options={sortOptions}
                onChange={onChangeSort}
                value={sort}
              />
              <ListBox<SortOrder>
                options={orderOptions}
                onChange={onChangeOrder}
                value={order}
              />
            </VStack>
          </div>
        }
      />
    )
  })
