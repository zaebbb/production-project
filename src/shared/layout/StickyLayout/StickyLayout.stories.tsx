import type { Meta, StoryObj } from '@storybook/react'
import { StickyLayout } from './StickyLayout'

const meta: Meta<typeof StickyLayout> = {
  title: 'CHANGE/StickyLayout',
  component: StickyLayout,
}

export default meta
type Story = StoryObj<typeof StickyLayout>

export const Primary: Story = {}
