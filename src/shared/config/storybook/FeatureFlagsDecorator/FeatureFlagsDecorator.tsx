import { type Story } from '@storybook/react'
import { setFeatureFlags } from '@/shared/lib/features'
import { type FeatureFlags } from '@/shared/types/featureFlags'

export const FeatureFlagsDecorator = (features: FeatureFlags) => (StoryComponent: Story) => {
  setFeatureFlags(features)

  return (
    <StoryComponent />
  )
}
