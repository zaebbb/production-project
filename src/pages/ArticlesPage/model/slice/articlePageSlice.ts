import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { articlePageAdapter } from '../adapter/articlePageAdapter'
import { ArticleSortField, ArticleType, ArticleView } from 'entities/Article'
import { LOCAL_STORAGE_ARTICLE_VIEW } from '../types/articlePage'
import { fetchArticles } from '../services/fetchArticles/fetchArticles'
import { type ArticlePageSchema } from '../types/articlePageSchema'
import { type SortOrder } from 'shared/types'

const articlesPageSlice = createSlice({
  name: 'articlesPageSlice',
  initialState: articlePageAdapter.getInitialState<ArticlePageSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
    view: ArticleView.SMALL,
    page: 1,
    hasMore: true,
    _mounted: false,
    limit: 9,
    order: 'asc',
    search: '',
    type: ArticleType.ALL,
    sort: ArticleSortField.CREATED_AT,
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload
      localStorage.setItem(
        LOCAL_STORAGE_ARTICLE_VIEW,
        action.payload
      )
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    },
    setOrder: (state, action: PayloadAction<SortOrder>) => {
      state.order = action.payload
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload
    },
    setSort: (state, action: PayloadAction<ArticleSortField>) => {
      state.sort = action.payload
    },
    setType: (state, action: PayloadAction<ArticleType>) => {
      state.type = action.payload
    },
    initState: (state) => {
      const view = localStorage.getItem(LOCAL_STORAGE_ARTICLE_VIEW) as ArticleView
      state.view = view
      state.limit = view === ArticleView.BIG ? 4 : 9
      state._mounted = true
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchArticles.pending,
        (
          state,
          action
        ) => {
          state.error = undefined
          state.isLoading = true

          if (action.meta.arg.replace) {
            articlePageAdapter.removeAll(state)
          }
        }
      )
      .addCase(
        fetchArticles.fulfilled,
        (
          state,
          action
        ) => {
          state.isLoading = false
          state.hasMore = action.payload.length >= state.limit

          if (action.meta.arg.replace) {
            articlePageAdapter.setAll(state, action.payload)
          } else {
            articlePageAdapter.addMany(state, action.payload)
          }
        }
      )
      .addCase(
        fetchArticles.rejected,
        (
          state,
          action
        ) => {
          state.isLoading = false
          state.error = action.payload
        }
      )
  },
})

export const { actions: articlesPageActions } = articlesPageSlice
export const { reducer: articlesPageReducer } = articlesPageSlice
