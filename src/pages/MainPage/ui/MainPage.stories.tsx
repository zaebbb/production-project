import type { Meta, StoryObj } from '@storybook/react'
import MainPage from './MainPage'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const'

const meta: Meta<typeof MainPage> = {
  title: 'pages/MainPage',
  component: MainPage,
}

export default meta
type Story = StoryObj<typeof MainPage>

export const MainPageLight: Story = {}
MainPageLight.decorators = [
  StoreDecorator({}),
]

export const MainPageDark: Story = {}
MainPageDark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({}),
]
