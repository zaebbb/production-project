import { createAsyncThunk } from '@reduxjs/toolkit'
import { type Profile } from '../../types/profile'
import { type ThunkConfig } from 'app/providers/StoreProvider'

export const fetchProfileData =
  createAsyncThunk<Profile, string, ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (
      profileId,
      thunkApi
    ) => {
      const {
        extra,
        rejectWithValue,
      } = thunkApi

      try {
        const response = await extra.api.get<Profile>(
          '/profile/' + profileId
        )

        if (!response.data) {
          throw new Error()
        }

        return response.data
      } catch (e) {
        return rejectWithValue('error')
      }
    }
  )
