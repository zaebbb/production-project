import React, { Suspense } from 'react'
import { type ArticleRatingProps } from './ArticleRating'

export const ArticleRatingLazy =
  React.lazy(async () => await import('./ArticleRating'))

export const ArticleRatingAsync = (props: ArticleRatingProps) => (
  <Suspense>
    <ArticleRatingLazy {...props} />
  </Suspense>
)
