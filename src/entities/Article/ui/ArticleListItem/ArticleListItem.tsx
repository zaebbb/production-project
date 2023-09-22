import React, { memo } from 'react'
import {
  type Article,
  type ArticleView,
} from '../../model/types/article'
import {
  ArticleListItemDeprecated,
} from './ArticleListItemDeprecated/ArticleListItemDeprecated'
import {
  ArticleListItemRedesigned,
} from './ArticleListItemRedesigned/ArticleListItemRedesigned'
import { ToggleFeatures } from '@/shared/lib/features'

export interface ArticleListItemProps {
  className?: string
  article: Article
  view: ArticleView
  target?: React.HTMLAttributeAnchorTarget
}

export const ArticleListItem: React.FC<ArticleListItemProps> =
  memo((props: ArticleListItemProps) => (
    <ToggleFeatures
      feature={'isAppRedesigned'}
      off={<ArticleListItemDeprecated {...props} />}
      on={<ArticleListItemRedesigned {...props} />}
    />
  ))
