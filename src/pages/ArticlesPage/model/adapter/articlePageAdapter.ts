import { createEntityAdapter } from '@reduxjs/toolkit'
import { type Article } from '@/entities/Article'

export const articlePageAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
})
