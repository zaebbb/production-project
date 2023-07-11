import type { Meta, StoryObj } from '@storybook/react'
import { Page } from './Page'

const meta: Meta<typeof Page> = {
  title: 'CHANGE/Page',
  component: Page,
}

export default meta
type Story = StoryObj<typeof Page>

export const Primary: Story = {}
