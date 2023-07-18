import { commentAdapter } from '../adapters/commentAdapter/commentAdapter'
import { type StateSchema } from 'app/providers/StoreProvider'

export const getArticleComments =
  commentAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsPage?.comments || commentAdapter.getInitialState()
  )

export const getArticleDetailsCommentIsLoading =
  (state: StateSchema) => state.articleDetailsPage?.comments?.isLoading

export const getArticleDetailsCommentError =
  (state: StateSchema) => state.articleDetailsPage?.comments?.error
