import { type FeatureFlags } from '../../../types/featureFlags'
import { getFeatureFlags } from './setGetFeatures'

interface ToggleFeatureOptions<T> {
  name: keyof FeatureFlags
  on: () => T
  off: () => T
}

export const toggleFeatures = <T>(options: ToggleFeatureOptions<T>): T => {
  const {
    on,
    off,
    name,
  } = options

  if (getFeatureFlags(name)) {
    return on()
  }

  return off()
}
