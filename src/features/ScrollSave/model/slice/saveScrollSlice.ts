import { type SaveScrollSchema } from '../types/saveScrollSchema'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const initialState: SaveScrollSchema = {
  scroll: {},
}

export const saveScrollSlice = createSlice({
  name: 'saveScrollSlice',
  initialState,
  reducers: {
    setScrollPosition: (
      state,
      { payload }: PayloadAction<{ path: string, position: number }>
    ) => {
      const { path, position } = payload
      state.scroll[path] = position
    },
  },
  extraReducers: (builder) => {

  },
})

export const { actions: saveScrollActions } = saveScrollSlice
export const { reducer: saveScrollReducer } = saveScrollSlice
