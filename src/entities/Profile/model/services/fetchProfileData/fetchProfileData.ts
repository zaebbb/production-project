import { createAsyncThunk } from '@reduxjs/toolkit'
import { type Profile } from '../../types/profile'
import { type ThunkConfig } from 'app/providers/StoreProvider'

export const fetchProfileData =
  createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (
      _,
      thunkApi
    ) => {
      const {
        extra,
        rejectWithValue,
      } = thunkApi

      try {
        const response = await extra.api.get<Profile>(
          '/profile'
        )

        return response.data
      } catch (e) {
        return rejectWithValue('error')
      }
    }
  )
