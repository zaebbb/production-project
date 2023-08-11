import { type Reducer } from '@reduxjs/toolkit'
import type React from 'react'
import { type StateSchema, type StateSchemaKey } from '@/app/providers/StoreProvider'

export type ReducerList = {
  [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>
}

export type ReducerEntry = [StateSchemaKey, Reducer]

export interface DynamicModuleLoaderProps {
  children: React.ReactNode
  reducers: ReducerList
  removeAfterUnmount?: boolean
}
