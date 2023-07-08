import { type AddCommentFormSchema } from '../types/addCommentForm'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const initialState: AddCommentFormSchema = {
  text: '',
  error: undefined,
  isLoading: false,
}

export const addCommentFormSlice = createSlice({
  name: 'addCommentForm',
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload
    },
  },
})

export const { actions: addCommentFormActions } = addCommentFormSlice
export const { reducer: addCommentFormReducer } = addCommentFormSlice
