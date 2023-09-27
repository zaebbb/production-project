import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi'
import { ArticleList } from '@/entities/Article'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ToggleFeatures } from '@/shared/lib/features'
import { VStack as VStackDeprecated } from '@/shared/ui/Stack'
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'

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
    <ToggleFeatures
      feature={'isAppRedesigned'}
      off={
        <VStackDeprecated
          gap={8}
          data-testid={'ArticleRecommendationsList'}
          className={classNames('', {}, [className])}
        >
          <TextDeprecated
            size={TextSize.L}
            title={t('article-recommendations')}
          />
          <ArticleList
            articles={recommendations}
            isLoading={isLoading}
            target={'_blank'}
          />
        </VStackDeprecated>
      }
      on={
        <VStack
          gap={8}
          data-testid={'ArticleRecommendationsList'}
          className={classNames('', {}, [className])}
        >
          <Text
            size={'l'}
            title={t('article-recommendations')}
          />
          <ArticleList
            articles={recommendations}
            isLoading={isLoading}
            target={'_blank'}
          />
        </VStack>
      }
    />
  )
})
