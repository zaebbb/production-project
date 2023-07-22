import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type ArticleDetailsCommentsSchema } from '../types/articleDetailsCommentsSchema'
import { type Comment } from 'entities/Comment'
import { commentAdapter } from '../adapters/commentAdapter/commentAdapter'
import {
  fetchCommentsArticleById,
} from '../services/fetchCommentsArticleById/fetchCommentsArticleById'

const articleDetailsCommentsSlice = createSlice({
  name: 'articleDetailsCommentsSlice',
  initialState: commentAdapter.getInitialState<ArticleDetailsCommentsSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchCommentsArticleById.pending,
        (
          state
        ) => {
          state.error = undefined
          state.isLoading = true
        }
      )
      .addCase(
        fetchCommentsArticleById.fulfilled,
        (
          state,
          action: PayloadAction<Comment[]>
        ) => {
          state.isLoading = false
          commentAdapter.setAll(state, action.payload)
        }
      )
      .addCase(
        fetchCommentsArticleById.rejected,
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

export const { actions: articleDetailsCommentsActions } = articleDetailsCommentsSlice
export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentsSlice
