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
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload
      localStorage.setItem(
        LOCAL_STORAGE_ARTICLE_VIEW,
        action.payload
      )
    },
    initState: (state) => {
      state.view = localStorage.getItem(LOCAL_STORAGE_ARTICLE_VIEW) as ArticleView
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
          articlePageAdapter.setAll(state, action.payload)
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
