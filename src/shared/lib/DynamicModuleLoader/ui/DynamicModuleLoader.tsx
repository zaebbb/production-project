import React from 'react'
import { type DynamicModuleLoaderProps } from '../types/DynamicModuleLoaderTypes'
import { useDispatch, useStore } from 'react-redux'
import {
  type ReduxStoreWithManager,
  type StateSchemaKey,
} from 'app/providers/StoreProvider'

export const DynamicModuleLoader: React.FC<DynamicModuleLoaderProps> = (props) => {
  const {
    children,
    reducers,
    removeAfterUnmount = false,
  } = props
  const store = useStore() as ReduxStoreWithManager
  const dispatch = useDispatch()

  React.useEffect(() => {
    Object.entries(reducers).forEach(([keyName, reducer]) => {
      store.reducerManager.add(keyName as StateSchemaKey, reducer)
      dispatch({ type: `@INIT ${keyName} reducer` })
    })

    return () => {
      Object.entries(reducers).forEach(([keyName, reducer]) => {
        if (removeAfterUnmount) {
          store.reducerManager.remove(keyName as StateSchemaKey)
          dispatch({ type: `@DESTROY ${keyName} reducer` })
        }
      })
    }

    // eslint-disable-next-line
  }, [])

  return (
    <>
      {children}
    </>
  )
}
