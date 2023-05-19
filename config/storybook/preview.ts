import type { Preview } from '@storybook/react'
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

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    BrowserRouterDecorator,
    StyleDecorator,
    ThemeDecorator(Theme.LIGHT),
  ],
}

export default preview
