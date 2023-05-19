import type { Meta, StoryObj } from '@storybook/react'
import AboutPage from './AboutPage'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

const meta: Meta<typeof AboutPage> = {
  title: 'pages/AboutPage',
  component: AboutPage,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof AboutPage>

export const AboutPageLight: Story = {}

export const AboutPageDark: Story = {}
AboutPageDark.decorators = [ThemeDecorator(Theme.DARK)]
