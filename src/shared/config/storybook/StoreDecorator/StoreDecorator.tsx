import { type DeepPartial, type ReducersMapObject } from '@reduxjs/toolkit'
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { type Story } from '@storybook/react'
import { loginReducer } from 'features/AuthByUsername'

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
  loginForm: loginReducer,
}

export const StoreDecorator = (
  state: DeepPartial<StateSchema>,
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
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
