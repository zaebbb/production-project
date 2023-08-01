import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import React, { memo } from 'react'
import { Text, TextSize } from 'shared/ui/Text/Text'
import { ArticleList } from 'entities/Article'
import { VStack } from 'shared/ui/Stack'
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi'

interface ArticleRecommendationsListProps {
  className?: string
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
  const { className } = props
  const { t } = useTranslation('article')
  const {
    isLoading,
    data: recommendations,
  } = useArticleRecommendationsList(4)

  if (isLoading) {
    return null
  }

  return (
    <VStack
      gap={8}
      className={classNames('', {}, [className])}
    >
      <Text
        size={TextSize.L}
        title={t('article-recommendations')}
      />
      <ArticleList
        articles={recommendations}
        isLoading={isLoading}
        target={'_blank'}
      />
    </VStack>
  )
})