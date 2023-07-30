import type { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { ArticlePageFilter } from './ArticlePageFilter'

const meta: Meta<typeof ArticlePageFilter> = {
  title: 'pages/ArticlesPage/ArticlePageFilter',
  component: ArticlePageFilter,
}

export default meta
type Story = StoryObj<typeof ArticlePageFilter>

export const Primary: Story = {}
Primary.decorators = [
  StoreDecorator({}),
]
