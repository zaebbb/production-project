import { type StateSchema } from 'app/providers/StoreProvider'
import { commentAdapter } from '../adapters/commentAdapter/commentAdapter'

export const getArticleComments =
  commentAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsPage?.comments || commentAdapter.getInitialState()
  )

export const getArticleDetailsCommentIsLoading =
  (state: StateSchema) => state.articleDetailsPage?.comments?.isLoading

export const getArticleDetailsCommentError =
  (state: StateSchema) => state.articleDetailsPage?.comments?.error
