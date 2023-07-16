import type { Meta, StoryObj } from '@storybook/react'
import { ArticlePageFilter } from './ArticlePageFilter'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

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
