import type React from 'react'
import { getFeatureFlags } from '../setGetFeatures'
import { type FeatureFlags } from '@/shared/types/featureFlags'

interface ToggleFeaturesProps {
  feature: keyof FeatureFlags
  on: React.ReactElement
  off: React.ReactElement
}

export const ToggleFeatures = (props: ToggleFeaturesProps) => {
  const {
    feature,
    on,
    off,
  } = props

  if (getFeatureFlags(feature)) {
    return on
  }

  return off
}
