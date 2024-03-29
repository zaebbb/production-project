import type { Meta, StoryObj } from '@storybook/react'
import { ThemeSwitcher } from './ThemeSwitcher'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { Theme } from '@/shared/const'

const meta: Meta<typeof ThemeSwitcher> = {
  title: 'widgets/ThemeSwitcher',
  component: ThemeSwitcher,
}

export default meta
type Story = StoryObj<typeof ThemeSwitcher>

export const ThemeSwitcherLight: Story = {}

export const ThemeSwitcherDark: Story = {}
ThemeSwitcherDark.decorators = [ThemeDecorator(Theme.DARK)]
