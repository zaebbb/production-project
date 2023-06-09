import type { ComponentStory, Meta } from '@storybook/react'
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Modal } from 'shared/ui/Modal/Modal'

const meta: Meta<typeof Modal> = {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {

  },
}

export default meta
const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const Primary = Template.bind({})
Primary.args = {
  isOpen: true,
  children: <h1>Hello world</h1>,
}

export const ModalDark = Template.bind({})
ModalDark.args = {
  isOpen: true,
  children: <h1>Hello world</h1>,
}
ModalDark.decorators = [ThemeDecorator(Theme.DARK)]
