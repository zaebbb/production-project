import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { LangSwitcher } from 'widgets/LangSwitcher'

const meta: Meta<typeof LangSwitcher> = {
  title: 'widgets/LangSwitcher',
  component: LangSwitcher,
}

export default meta
type Story = StoryObj<typeof LangSwitcher>

export const LangSwitcherLight: Story = {}

export const LangSwitcherDark: Story = {}
LangSwitcherDark.decorators = [ThemeDecorator(Theme.DARK)]
