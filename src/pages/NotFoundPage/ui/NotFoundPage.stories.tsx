import type { Meta, StoryObj } from '@storybook/react'
import { NotFoundPage } from './NotFoundPage'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const'

const meta: Meta<typeof NotFoundPage> = {
  title: 'pages/NotFoundPage',
  component: NotFoundPage,
}

export default meta
type Story = StoryObj<typeof NotFoundPage>

export const NotFoundPageLight: Story = {}
NotFoundPageLight.decorators = [
  StoreDecorator({}),
]

export const NotFoundPageDark: Story = {}
NotFoundPageDark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({}),
]
