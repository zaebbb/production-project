import type { ComponentStory, Meta } from '@storybook/react'
import { Input } from './Input'

const meta: Meta<typeof Input> = {
  title: 'shared/redesigned/Input',
  component: Input,
  argTypes: {

  },
}

export default meta
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Primary = Template.bind({})
Primary.args = {
  placeholder: 'Input text',
  value: 'Text...',
}

export const Placeholder = Template.bind({})
Placeholder.args = {
  placeholder: 'Input text',
}

export const Readonly = Template.bind({})
Readonly.args = {
  placeholder: 'Input text',
  readonly: true,
}
