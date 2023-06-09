import {
  BrowserRouterDecorator,
} from '../../src/shared/config/storybook/BrowserRouterDecorator/BrowserRouterDecorator'
import {
  StyleDecorator,
} from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator'
import {
  ThemeDecorator,
} from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { addDecorator } from '@storybook/react'

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

addDecorator(BrowserRouterDecorator)
addDecorator(StyleDecorator)
addDecorator(ThemeDecorator(Theme.LIGHT))

export default preview
