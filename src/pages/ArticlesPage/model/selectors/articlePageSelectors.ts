import { type StateSchema } from 'app/providers/StoreProvider'
import { ArticleView } from 'entities/Article'
import { articlePageAdapter } from '../adapter/articlePageAdapter'

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

export const getArticlePageMounted =
  (state: StateSchema) => state.articlesPage?._mounted

export const getArticles =
  articlePageAdapter.getSelectors<StateSchema>(
    (state) => state.articlesPage || articlePageAdapter.getInitialState()
  )
