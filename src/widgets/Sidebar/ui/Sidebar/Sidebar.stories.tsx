import type { Meta, StoryObj } from '@storybook/react'
import { Sidebar } from './Sidebar'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const'

const meta: Meta<typeof Sidebar> = {
  title: 'widgets/Sidebar',
  component: Sidebar,
}

export default meta
type Story = StoryObj<typeof Sidebar>

export const SidebarLight: Story = {}
SidebarLight.decorators = [
  StoreDecorator({
    user: {
      authData: {},
    },
  }),
]

export const SidebarDark: Story = {}
SidebarDark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    user: {
      authData: {},
    },
  }),
]

export const NoAuth: Story = {
  args: {

  },
}
NoAuth.decorators = [StoreDecorator({})]
