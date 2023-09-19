import React, { memo } from 'react'
import { useArticleFilter } from '../../lib/hooks/useArticleFilter'
import { ArticleViewSelector } from '@/features/ArticleViewSelector'

interface ViewSelectorContainerProps {
  className?: string
}

export const ViewSelectorContainer: React.FC<ViewSelectorContainerProps> =
  memo((props: ViewSelectorContainerProps) => {
    const { className } = props

    const {
      view,
      onChangeView,
    } = useArticleFilter()

    return (
      <ArticleViewSelector
        view={view}
        onViewClick={onChangeView}
        className={className}
      />
    )
  })
