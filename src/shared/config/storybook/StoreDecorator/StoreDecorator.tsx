import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { type Story } from '@storybook/react'
import { loginReducer } from 'features/AuthByUsername'
import { profileReducer } from 'entities/Profile'
import { type ReducerList } from 'shared/lib/DynamicModuleLoader'
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice'
import { addCommentFormReducer } from 'features/addCommentForm/model/slice/addCommentFormSlice'
import {
  articleDetailsCommentsReducer,
} from 'pages/ArticleDetailsPage/model/slice/articleDetailsComments'

const defaultAsyncReducers: ReducerList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addCommentForm: addCommentFormReducer,
  articleDetailsComments: articleDetailsCommentsReducer,
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
