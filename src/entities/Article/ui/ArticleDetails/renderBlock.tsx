import React from 'react'
import { type ArticleBlock, ArticleBlockType } from '../../model/types/article'
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent'
import {
  ArticleImageBlockComponent,
} from '../ArticleImageBlockComponent/ArticleImageBlockComponent'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'
import cls from './ArticleDetails.module.scss'

export const renderArticleBlock = (block: ArticleBlock): React.ReactNode => {
  switch (block.type) {
    case ArticleBlockType.CODE:
      return <ArticleCodeBlockComponent
        block={block}
        className={cls.block}
        key={block.id}
      />
    case ArticleBlockType.IMAGE:
      return <ArticleImageBlockComponent
        key={block.id}
        className={cls.block}
        block={block}
      />
    case ArticleBlockType.TEXT:
      return <ArticleTextBlockComponent
        key={block.id}
        block={block}
        className={cls.block}
      />
    default:
      return null
  }
}
