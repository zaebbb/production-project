import React, { memo } from 'react'
import { useArticleFilter } from '../../lib/hooks/useArticleFilter'
import { ArticleFilters } from '@/widgets/ArticleFilters'

interface FilterContainerProps {
  className?: string
}

export const FilterContainer: React.FC<FilterContainerProps> =
  memo((props: FilterContainerProps) => {
    const {
      className,
    } = props

    const {
      onChangeSearch,
      sort,
      order,
      onChangeSort,
      onChangeOrder,
      search,
      type,
      onChangeType,
    } = useArticleFilter()

    return (
      <ArticleFilters
        className={className}
        sort={sort}
        order={order}
        onChangeSort={onChangeSort}
        onChangeOrder={onChangeOrder}
        type={type}
        onChangeType={onChangeType}
        search={search}
        onChangeSearch={onChangeSearch}
      />
    )
  })
