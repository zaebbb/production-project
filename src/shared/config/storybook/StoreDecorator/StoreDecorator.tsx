import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { type Story } from '@storybook/react'
import { loginReducer } from 'features/AuthByUsername'
import { profileReducer } from 'entities/Profile'
import { type ReducerList } from 'shared/lib/DynamicModuleLoader'

const defaultAsyncReducers: ReducerList = {
  loginForm: loginReducer,
  profile: profileReducer,
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
