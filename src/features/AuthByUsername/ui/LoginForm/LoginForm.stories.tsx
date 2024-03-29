import type { ComponentStory, Meta } from '@storybook/react'
import LoginForm from './LoginForm'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

const meta: Meta<typeof LoginForm> = {
  title: 'features/AuthByUsername/LoginForm',
  component: LoginForm,
  argTypes: {

  },
}

export default meta
const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />

export const Primary = Template.bind({})
Primary.decorators = [StoreDecorator({
  loginForm: {
    username: '123',
    password: '123',
  },
})]

export const DataError = Template.bind({})
DataError.decorators = [StoreDecorator({
  loginForm: {
    username: '123',
    password: '123',
    error: 'Ошибка ввода данных',
  },
})]

export const Loading = Template.bind({})
Loading.args = {}
Loading.decorators = [StoreDecorator({
  loginForm: {
    username: '123',
    password: '123',
    isLoading: true,
  },
})]
