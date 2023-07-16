import { type EntityState } from '@reduxjs/toolkit'
import {
  type Article,
  type ArticleSortField,
  type ArticleType,
  type ArticleView,
} from 'entities/Article'
import { type SortOrder } from 'shared/types'

export interface ArticlePageSchema extends EntityState<Article> {
  isLoading?: boolean
  error?: string

  // pagination
  page: number
  limit: number
  hasMore: boolean

  // filter
  view: ArticleView
  order: SortOrder
  sort: ArticleSortField
  search: string
  type: ArticleType

  _mounted: boolean
}
