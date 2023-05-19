import { type Theme } from 'app/providers/ThemeProvider'
import { type Story } from '@storybook/react'

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
  <div className={`app ${theme}`}>
    <StoryComponent />
  </div>
)
