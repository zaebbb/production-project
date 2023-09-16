import type { ComponentStory, Meta } from '@storybook/react'
import { ListBox, type ListBoxItem } from './ListBox'

const meta: Meta<typeof ListBox> = {
  title: 'shared/ListBox',
  component: ListBox,
  decorators: [
    (Story) => <div style={{ padding: 100 }}><Story /></div>,
  ],
}

const ListBoxTestComponent: ListBoxItem[] = [
  { value: '1', content: '1' },
  { value: '2', content: '2' },
]

export default meta
const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />

export const Default = Template.bind({})
Default.args = {
  options: ListBoxTestComponent,
  label: 'button',
}

export const DirectionBottomRight = Template.bind({})
DirectionBottomRight.args = {
  options: ListBoxTestComponent,
  direction: 'bottom-right',
  label: 'button',
}

export const DirectionTopLeft = Template.bind({})
DirectionTopLeft.args = {
  options: ListBoxTestComponent,
  direction: 'top-left',
  label: 'button',
}

export const DirectionTopRight = Template.bind({})
DirectionTopRight.args = {
  options: ListBoxTestComponent,
  direction: 'top-right',
  label: 'button',
}
