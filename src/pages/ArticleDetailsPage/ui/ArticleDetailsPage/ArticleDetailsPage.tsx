import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { articleDetailsPageReducer } from '../../model/slice'
import { AdditionalInfoContainer } from '../AdditionalInfoContainer/AdditionalInfoContainer'
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments'
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader'
import { DetailsContainer } from '../DetailsContainer/DetailsContainer'
import cls from './ArticleDetailsPage.module.scss'
import { ArticleDetails } from '@/entities/Article'
import { Counter } from '@/entities/Counter'
import { ArticleRecommendationsList } from '@/features/ArticleRecommendationsList'
import { ArticleRating } from '@/features/articleRating'
import { StickyLayout } from '@/shared/layout/StickyLayout/StickyLayout'
import { classNames } from '@/shared/lib/classNames/classNames'
import { DynamicModuleLoader, type ReducerList } from '@/shared/lib/components/DynamicModuleLoader'
import { getFeatureFlags, ToggleFeatures } from '@/shared/lib/features'
import { VStack as VStackDeprecated } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/deprecated/Text'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { Page } from '@/widgets/Page'

interface ArticleDetailsPageProps {
  className?: string
}

const reducers: ReducerList = {
  articleDetailsPage: articleDetailsPageReducer,
}

const ArticleDetailsPage: React.FC<ArticleDetailsPageProps> = (props: ArticleDetailsPageProps) => {
  const { className } = props
  const { id } = useParams<{ id: string }>()
  const { t } = useTranslation('article')
  const isArticleRatingEnabled = getFeatureFlags('isArticleRatingEnabled')

  if (!id) {
    return (
      <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        <Text title={t('article-not-found')} />
      </Page>
    )
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <ToggleFeatures
        feature={'isAppRedesigned'}
        off={
          <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            <VStackDeprecated gap={16}>
              <ArticleDetailsPageHeader />
              <ArticleDetails id={id} />
              {isArticleRatingEnabled && <ArticleRating id={id}/>}
              <ToggleFeatures
                feature={'isArticleCounterEnabled'}
                on={<Counter />}
                off={<Counter />}
              />
              <ArticleRecommendationsList />
              <ArticleDetailsComments id={id} />
            </VStackDeprecated>
          </Page>
        }
        on={
          <StickyLayout
            content={
              <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <VStack gap={16}>
                  <DetailsContainer id={id} />
                  <ArticleRating id={id}/>
                  <ArticleRecommendationsList />
                  <ArticleDetailsComments id={id} />
                </VStack>
              </Page>
            }
            right={<AdditionalInfoContainer />}
          />
        }
      />
    </DynamicModuleLoader>
  )
}

export default memo(ArticleDetailsPage)
