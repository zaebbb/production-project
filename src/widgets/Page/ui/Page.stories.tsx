import type { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { Page } from './Page'

const meta: Meta<typeof Page> = {
  title: 'widgets/Page',
  component: Page,
}

export default meta
type Story = StoryObj<typeof Page>

export const Primary: Story = {}
Primary.decorators = [
  StoreDecorator({}),
]
