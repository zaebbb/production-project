import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticlesPage.module.scss'
import { ArticleList } from 'entities/Article'

interface ArticlesPageProps {
  className?: string
}

const ArticlesPage: React.FC<ArticlesPageProps> = (props: ArticlesPageProps) => {
  const { className } = props

  return (
    <div className={classNames(cls.ArticlesPage, {}, [className])}>
      <ArticleList
        // view={ArticleView.BIG}
        articles={[]}
      />
    </div>
  )
}

export default ArticlesPage
