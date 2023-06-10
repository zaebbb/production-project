import React from 'react'
import { Provider } from 'react-redux'
import { type ReducersMapObject } from '@reduxjs/toolkit'
import { type StateSchema } from '../config/StateSchema'
import { createReduxStore } from '../config/store'
import { useNavigate } from 'react-router-dom'

interface StoreProviderProps {
  children?: React.ReactNode
  initialState?: DeepPartial<StateSchema>
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const StoreProvider: React.FC<StoreProviderProps> = (props) => {
  const {
    children,
    initialState,
    asyncReducers,
  } = props

  const navigate = useNavigate()

  const store = createReduxStore(
    initialState as StateSchema,
    asyncReducers as ReducersMapObject<StateSchema>,
    navigate
  )

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
