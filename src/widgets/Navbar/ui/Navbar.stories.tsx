import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Navbar } from './Navbar'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

const meta: Meta<typeof Navbar> = {
  title: 'widgets/Navbar',
  component: Navbar,
}

export default meta
type Story = StoryObj<typeof Navbar>

export const NavbarLight: Story = {}
NavbarLight.decorators = [StoreDecorator({})]

export const NavbarDark: Story = {}
NavbarDark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({}),
]

export const AuthNavbar: Story = {}
AuthNavbar.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    user: {
      authData: {},
    },
  }),
]
