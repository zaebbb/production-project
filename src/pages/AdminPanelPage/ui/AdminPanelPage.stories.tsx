import type { Meta, StoryObj } from '@storybook/react'
import AdminPanelPage from './AdminPanelPage'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

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
