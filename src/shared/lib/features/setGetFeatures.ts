import { type FeatureFlags } from '@/shared/types/featureFlags'

let featuresFlags: FeatureFlags = {}

export const setFeatureFlags = (newFeatureFlags?: FeatureFlags) => {
  if (newFeatureFlags) {
    featuresFlags = newFeatureFlags
  }
}

export const getFeatureFlags = (flag: keyof FeatureFlags) => featuresFlags[flag]
