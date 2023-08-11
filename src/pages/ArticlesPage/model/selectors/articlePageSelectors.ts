import { articlePageAdapter } from '../adapter/articlePageAdapter'
import { type StateSchema } from '@/app/providers/StoreProvider'
import { ArticleSortField, ArticleType, ArticleView } from '@/entities/Article'

export const getArticlePageIsLoading =
  (state: StateSchema) => state.articlesPage?.isLoading

export const getArticlePageView =
  (state: StateSchema) => state.articlesPage?.view || ArticleView.SMALL

export const getArticlePageError =
  (state: StateSchema) => state.articlesPage?.error

export const getArticlePageNum =
  (state: StateSchema) => state.articlesPage?.page || 1

export const getArticlePageLimit =
  (state: StateSchema) => state.articlesPage?.limit

export const getArticlePageHasMore =
  (state: StateSchema) => state.articlesPage?.hasMore

export const getArticlePageOrder =
  (state: StateSchema) => state.articlesPage?.order ?? 'asc'

export const getArticlePageSort =
  (state: StateSchema) => state.articlesPage?.sort ?? ArticleSortField.CREATED_AT

export const getArticlePageSearch =
  (state: StateSchema) => state.articlesPage?.search ?? ''

export const getArticlePageType =
  (state: StateSchema) => state.articlesPage?.type ?? ArticleType.ALL

export const getArticlePageMounted =
  (state: StateSchema) => state.articlesPage?._mounted

export const getArticles =
  articlePageAdapter.getSelectors<StateSchema>(
    (state) => state.articlesPage || articlePageAdapter.getInitialState()
  )
