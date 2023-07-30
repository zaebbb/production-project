import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { NotFoundPage } from './NotFoundPage'

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
