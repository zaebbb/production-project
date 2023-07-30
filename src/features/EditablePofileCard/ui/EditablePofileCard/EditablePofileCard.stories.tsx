import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { EditablePofileCard } from './EditablePofileCard'

export default {
  title: 'features/EditablePofileCard',
  component: EditablePofileCard,
} satisfies ComponentMeta<typeof EditablePofileCard>

const Template: ComponentStory<typeof EditablePofileCard> =
  (args) => <EditablePofileCard {...args} />

export const Normal = Template.bind({})
Normal.decorators = [
  StoreDecorator({}),
]
