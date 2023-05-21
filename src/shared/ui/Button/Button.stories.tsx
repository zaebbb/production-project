import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta: ComponentMeta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  argTypes: {

  },
}

export default meta
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Hello Button',
}
Primary.decorators = [ThemeDecorator(Theme.DARK)]

export const Clear = Template.bind({})
Clear.args = {
  children: 'Clear Button',
  theme: ThemeButton.CLEAR,
}
Clear.decorators = [ThemeDecorator(Theme.DARK)]

export const OutlineLight = Template.bind({})
OutlineLight.args = {
  children: 'Outline Button',
  theme: ThemeButton.OUTLINE,
}

export const OutlineDark = Template.bind({})
OutlineDark.args = {
  children: 'Outline Button',
  theme: ThemeButton.OUTLINE,
}
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]
