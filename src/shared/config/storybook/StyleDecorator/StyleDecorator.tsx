import { type Story } from '@storybook/react'
// eslint-disable-next-line dev-proger-eslint-plugin/layer-imports
import '@/app/styles/index.scss'

export const StyleDecorator = (StoryComponent: Story) => (
  <StoryComponent />
)
