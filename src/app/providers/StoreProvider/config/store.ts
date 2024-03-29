import {
  type CombinedState,
  configureStore,
  type Reducer,
  type ReducersMapObject,
} from '@reduxjs/toolkit'
import { type StateSchema } from './StateSchema'
import { createReducerManager } from './reducerManager'
import { counterReducer } from '@/entities/Counter'
import { userReducer } from '@/entities/User'
import { saveScrollReducer } from '@/features/ScrollSave'
import { $api } from '@/shared/api/api'
import { rtkApi } from '@/shared/api/rtkApi'

export function createReduxStore (
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
    saveScroll: saveScrollReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
  }

  const reducerManager = createReducerManager(rootReducers)

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
      thunk: {
        extraArgument: {
          api: $api,
        },
      },
    }).concat(rtkApi.middleware),
  })

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  store.reducerManager = reducerManager

  return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
