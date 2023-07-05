import { commentAdapter } from '../adapters/commentAdapter/commentAdapter'
import { type StateSchema } from 'app/providers/StoreProvider'

export const getArticleComments =
  commentAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsComments || commentAdapter.getInitialState()
  )

export const getArticleDetailsCommentIsLoading =
  (state: StateSchema) => state.articleDetailsComments?.isLoading

export const getArticleDetailsCommentError =
  (state: StateSchema) => state.articleDetailsComments?.error
