import type { Meta, StoryObj } from '@storybook/react'
import { AppImages } from './AppImages'

const meta: Meta<typeof AppImages> = {
  title: 'CHANGE/AppImages',
  component: AppImages,
}

export default meta
type Story = StoryObj<typeof AppImages>

export const Primary: Story = {}
