import { createAsyncThunk } from '@reduxjs/toolkit'
import { updateFeatureFlagMutation } from '../api/featureFlagsApi'
import { getAllFeatureFlags } from '../lib/setGetFeatures'
import { type ThunkConfig } from '@/app/providers/StoreProvider'
import { type FeatureFlags } from '@/shared/types/featureFlags'

interface UpdateFeatureFlagOptions {
  userId: string
  newFeatures: Partial<FeatureFlags>
}

export const updateFeatureFlags =
  createAsyncThunk<void, UpdateFeatureFlagOptions, ThunkConfig<string>>(
    'user/saveJsonSettings',
    async (
      { userId, newFeatures },
      thunkApi
    ) => {
      const {
        rejectWithValue,
        dispatch,
      } = thunkApi

      try {
        await dispatch(
          updateFeatureFlagMutation({
            userId,
            features: {
              ...getAllFeatureFlags(),
              ...newFeatures,
            },
          })
        )

        window.location.reload()
      } catch (e) {
        return rejectWithValue('error')
      }
    }
  )
