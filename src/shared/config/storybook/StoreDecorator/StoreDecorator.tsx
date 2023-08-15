import { type Story } from '@storybook/react'
import { type StateSchema, StoreProvider } from '@/app/providers/StoreProvider'
import { loginReducer } from '@/features/AuthByUsername/itest'
import { type ReducerList } from '@/shared/lib/components/DynamicModuleLoader'
import { articleDetailsReducer } from '@/entities/Article/itest'
import { addCommentFormReducer } from '@/features/addCommentForm/itest'
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage/itest'
import { profileReducer } from '@/features/EditablePofileCard/itest'

const defaultAsyncReducers: ReducerList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addCommentForm: addCommentFormReducer,
  articleDetailsPage: articleDetailsPageReducer,
}

export const StoreDecorator = (
  state: DeepPartial<StateSchema>,
  asyncReducers?: ReducerList
) => (StoryComponent: Story) => {
  return (
    <StoreProvider
      initialState={state}
      asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
    >
      <StoryComponent />
    </StoreProvider>
  )
}
