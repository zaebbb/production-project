import type { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import AdminPanelPage from './AdminPanelPage'

const meta: Meta<typeof AdminPanelPage> = {
  title: 'CHANGE/AdminPanelPage',
  component: AdminPanelPage,
}

export default meta
type Story = StoryObj<typeof AdminPanelPage>

export const Primary: Story = {}
Primary.decorators = [
  StoreDecorator({}),
]
