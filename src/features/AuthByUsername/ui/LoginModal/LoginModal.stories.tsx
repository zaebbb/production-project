import type { ComponentStory, Meta } from '@storybook/react'
import { LoginModal } from 'features/AuthByUsername'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

const meta: Meta<typeof LoginModal> = {
  title: 'features/LoginModal',
  component: LoginModal,
  argTypes: {

  },
}

export default meta
const Template: ComponentStory<typeof LoginModal> = (args) => <LoginModal {...args} />

export const Primary = Template.bind({})
Primary.args = {
  isOpen: true,
}
Primary.decorators = [StoreDecorator({
  loginForm: {
    username: '123',
    password: '123',
  },
})]
