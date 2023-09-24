import { rtkApi } from '@/shared/api/rtkApi'
import { type FeatureFlags } from '@/shared/types/featureFlags'

interface UpdateFeatureFlagsApi {
  userId: string
  features: Partial<FeatureFlags>
}

const featureFlagsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    updateFeatureFlags: build.mutation<void, UpdateFeatureFlagsApi>({
      query: ({ userId, features }) => ({
        url: `/users/${userId}`,
        method: 'PATCH',
        body: {
          features,
        },
      }),
    }),
  }),
})

export const updateFeatureFlagMutation =
  featureFlagsApi.endpoints.updateFeatureFlags.initiate
