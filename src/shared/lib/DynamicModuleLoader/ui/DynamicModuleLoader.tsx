import React from 'react'
import { type DynamicModuleLoaderProps, type ReducerEntry } from '../types/DynamicModuleLoaderTypes'
import { useDispatch, useStore } from 'react-redux'
import { type ReduxStoreWithManager } from 'app/providers/StoreProvider'

export const DynamicModuleLoader: React.FC<DynamicModuleLoaderProps> = (props) => {
  const {
    children,
    reducers,
    removeAfterUnmount = false,
  } = props
  const store = useStore() as ReduxStoreWithManager
  const dispatch = useDispatch()

  React.useEffect(() => {
    Object.entries(reducers).forEach(([keyName, reducer]: ReducerEntry) => {
      store.reducerManager.add(keyName, reducer)
      dispatch({ type: `@INIT ${keyName} reducer` })
    })

    return () => {
      Object.entries(reducers).forEach(([keyName, reducer]: ReducerEntry) => {
        if (removeAfterUnmount) {
          store.reducerManager.remove(keyName)
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
