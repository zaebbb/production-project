import { type StateSchema } from './StateSchema'
import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'

export function createReduxStore (initialState?: StateSchema) {
  return configureStore<StateSchema>({
    reducer: {
      counter: counterReducer,
      user: userReducer,
    },
    devTools: __IS_DEV__,
    preloadedState: initialState,
  })
}
