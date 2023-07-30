import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import AboutPage from './AboutPage'

const meta: Meta<typeof AboutPage> = {
  title: 'pages/AboutPage',
  component: AboutPage,
}

export default meta
type Story = StoryObj<typeof AboutPage>

export const AboutPageLight: Story = {}
AboutPageLight.decorators = [
  StoreDecorator({}),
]

export const AboutPageDark: Story = {}
AboutPageDark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({}),
]
