import type { ComponentStory, Meta } from '@storybook/react'
import { Card } from './Card'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const'

const meta: Meta<typeof Card> = {
  title: 'shared/redesigned/Card',
  component: Card,
  argTypes: {

  },
}

export default meta
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: '<h1>Testing Card</h1>',
}

export const Dark = Template.bind({})
Dark.args = {
  children: '<h1>Testing Card</h1>',
}
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
]
