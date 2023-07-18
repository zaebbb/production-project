import React, { type HTMLAttributeAnchorTarget, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleList.module.scss'
import { type Article, ArticleView } from '../../model/types/article'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItem.skeleton'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { useTranslation } from 'react-i18next'
import { Text } from 'shared/ui/Text/Text'

interface ArticleListProps {
  className?: string
  articles: Article[]
  isLoading?: boolean
  view?: ArticleView
  target?: HTMLAttributeAnchorTarget
}

const getSkeleton = (view: ArticleView) => {
  return new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((_, i) => (
      <ArticleListItemSkeleton
        view={view}
        className={cls.card}
        key={i}
      />
    ))
}

export const ArticleList: React.FC<ArticleListProps> = memo((props: ArticleListProps) => {
  const {
    className,
    articles,
    isLoading,
    view = ArticleView.SMALL,
    target,
  } = props
  const { t } = useTranslation('article')

  const renderArticle = (article: Article) => {
    return (
      <ArticleListItem
        className={cls.card}
        key={article.id}
        article={article}
        view={view}
        target={target}
      />
    )
  }

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        <Text text={t('articles-not-found')} />
      </div>
    )
  }

  return (
    <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
      {
        articles.length ? (
          articles.map(renderArticle)
        ) : null
      }
      {
        isLoading && getSkeleton(view)
      }
    </div>
  )
})
