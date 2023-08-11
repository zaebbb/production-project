import { type Story } from '@storybook/react'
import { type StateSchema, StoreProvider } from '@/app/providers/StoreProvider'
import { loginReducer } from '@/features/AuthByUsername'
import { type ReducerList } from '@/shared/lib/components/DynamicModuleLoader'
import { articleDetailsReducer } from '@/entities/Article/model/slice/articleDetailsSlice'
import { addCommentFormReducer } from '@/features/addCommentForm/model/slice/addCommentFormSlice'
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage/model/slice'
import { profileReducer } from '@/features/EditablePofileCard/model/slice/profileSlice'

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
