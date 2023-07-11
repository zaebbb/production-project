import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { articlePageAdapter } from '../adapter/articlePageAdapter'
import { type Article, ArticleView } from 'entities/Article'
import { LOCAL_STORAGE_ARTICLE_VIEW } from '../types/articlePage'
import { fetchArticles } from '../services/fetchArticles/fetchArticles'
import { type ArticlePageSchema } from 'pages/ArticlesPage'

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
    initState: (state) => {
      const view = localStorage.getItem(LOCAL_STORAGE_ARTICLE_VIEW) as ArticleView
      state.view = view
      state.limit = view === ArticleView.BIG ? 4 : 9
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchArticles.pending,
        (
          state
        ) => {
          state.error = undefined
          state.isLoading = true
        }
      )
      .addCase(
        fetchArticles.fulfilled,
        (
          state,
          action: PayloadAction<Article[]>
        ) => {
          state.isLoading = false
          articlePageAdapter.addMany(state, action.payload)
          state.hasMore = action.payload.length > 0
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
