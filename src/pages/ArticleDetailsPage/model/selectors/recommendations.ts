import { type StateSchema } from 'app/providers/StoreProvider'
import {
  recommendationsAdapter,
} from '../adapters/recommendationsAdapter/recommendationsAdapter'

export const getArticleRecommendations =
  recommendationsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsPage?.recommendations || recommendationsAdapter.getInitialState()
  )

export const getArticleDetailsRecommendationsIsLoading =
  (state: StateSchema) => state.articleDetailsPage?.recommendations?.isLoading

export const getArticleDetailsRecommendationsError =
  (state: StateSchema) => state.articleDetailsPage?.recommendations?.error
