import { createAsyncThunk } from '@reduxjs/toolkit'
import { getUserDataByIdQuery } from '../../api/userApi'
import { type User } from '../types/user'
import { type ThunkConfig } from '@/app/providers/StoreProvider'
import { LOCAL_STORAGE_LAST_DESIGN_KEY, USER_LOCAL_STORAGE_KEY } from '@/shared/const/localstorage'

export const initAuthData =
  createAsyncThunk<User, void, ThunkConfig<string>>(
    'user/initAuthData',
    async (
      string,
      thunkApi
    ) => {
      const {
        rejectWithValue,
        dispatch,
      } = thunkApi

      const userId = localStorage.getItem(USER_LOCAL_STORAGE_KEY)

      if (!userId) {
        return rejectWithValue('error')
      }

      try {
        const response = await dispatch(getUserDataByIdQuery(userId)).unwrap()

        localStorage.setItem(
          LOCAL_STORAGE_LAST_DESIGN_KEY, response?.features?.isAppRedesigned ? 'new' : 'old'
        )

        return response
      } catch (e) {
        return rejectWithValue('error')
      }
    }
  )
