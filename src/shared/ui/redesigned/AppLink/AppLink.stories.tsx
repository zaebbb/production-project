import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { AppLink } from './AppLink'

const meta: ComponentMeta<typeof AppLink> = {
  title: 'shared/AppLink',
  component: AppLink,
  args: {
    to: '/',
  },
}

export default meta
const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />

export const AppLinkPrimaryLight = Template.bind({})
AppLinkPrimaryLight.args = {
  children: 'AppLinkPrimaryLight',
  variant: 'primary',
}
//
// export const AppLinkSecondaryLight = Template.bind({})
// AppLinkSecondaryLight.args = {
//   children: 'AppLinkSecondaryLight',
//   theme: AppLinkTheme.SECONDARY,
// }
//
// export const AppLinkPrimaryDark = Template.bind({})
// AppLinkPrimaryDark.args = {
//   children: 'AppLinkPrimaryDark',
//   theme: AppLinkTheme.PRIMARY,
// }
// AppLinkPrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]
//
// export const AppLinkSecondaryDark = Template.bind({})
// AppLinkSecondaryDark.args = {
//   children: 'AppLinkSecondaryDark',
//   theme: AppLinkTheme.SECONDARY,
// }
// AppLinkSecondaryDark.decorators = [ThemeDecorator(Theme.DARK)]
