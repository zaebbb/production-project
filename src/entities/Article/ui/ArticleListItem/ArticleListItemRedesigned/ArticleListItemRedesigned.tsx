import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { ArticleBlockType, ArticleView, type ArticleTextBlock } from '../../../model/types/article'

import { type ArticleListItemProps } from '../ArticleListItem'
import cls from './ArticleListItemRedesigned.module.scss'
import EyeIcon from '@/shared/assets/icons/redesigned/EyeIcon.svg'
import NotFoundImage from '@/shared/assets/images/not-found.png'
import { getRouteArticleDetails } from '@/shared/const'
import { classNames } from '@/shared/lib/classNames/classNames'
import { AppImages } from '@/shared/ui/redesigned/AppImages'
import { AppLink } from '@/shared/ui/redesigned/AppLink'
import { Avatar } from '@/shared/ui/redesigned/Avatar'
import { Button } from '@/shared/ui/redesigned/Button'
import { Card } from '@/shared/ui/redesigned/Card'
import { Icon } from '@/shared/ui/redesigned/Icon'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'

export const ArticleListItemRedesigned: React.FC<ArticleListItemProps> =
  memo((props: ArticleListItemProps) => {
    const {
      className,
      article,
      view,
      target,
    } = props
    const { t } = useTranslation('article')

    const types = (
      <Text
        text={article.type.join(', ')}
        className={cls.types}
      />
    )

    const views = (
      <HStack gap={8} align={'center'}>
        <Icon Svg={EyeIcon} />
        <Text
          text={String(article.views)}
          className={cls.views}
        />
      </HStack>
    )

    const skeleton = (
      <Skeleton
        width={view === ArticleView.BIG ? '100%' : '200px'}
        height={view === ArticleView.BIG ? '250px' : '200px'}
      />
    )

    const fallbackImage = (
      <AppImages
        src={NotFoundImage}
        fallback={skeleton}
        errorFallback={NotFoundImage}
        className={cls.img}
      />
    )

    const image = (
      <AppImages
        src={article.image}
        alt={article.title}
        className={cls.img}
        fallback={skeleton}
        errorFallback={fallbackImage}
      />
    )

    if (view === ArticleView.BIG) {
      const textBlock = article.blocks.find(
        block => block.type === ArticleBlockType.TEXT
      ) as ArticleTextBlock

      console.log(article.image)

      return (
        <Card
          padding={'24'}
          isMax
          className={
            classNames(cls.ArticleListItem, {}, [className, cls[view]])
          }
          data-testid={'ArticleListItem'}
        >
          <VStack isMax gap={16}>
            <HStack gap={8} isMax>
              <Avatar size={32} src={article.user.avatar} />
              <Text isBold text={article.user.username} />
              <Text text={article.createdAt} />
            </HStack>

            <Text title={article.title} isBold size={'l'}/>
            <Text title={article.subtitle}/>

            <AppImages
              src={article.image}
              alt={article.title}
              className={cls.img}
              fallback={skeleton}
              errorFallback={fallbackImage}
            />

            {textBlock && (
              <Text
                className={cls.textBlock}
                text={textBlock.paragraphs.slice(0, 2).join(' ')}
              />
            )}

            <HStack isMax justify={'space-between'}>
              <AppLink
                target={target}
                to={getRouteArticleDetails(article.id)}
              >
                <Button variant={'outline'}>
                  {t('article-read-more')}
                </Button>
              </AppLink>

              {views}
            </HStack>
          </VStack>
        </Card>
      )
    }

    return (
      <AppLink
        data-testid={'ArticleListItem'}
        target={target}
        to={getRouteArticleDetails(article.id)}
        className={
          classNames(cls.ArticleListItem, {}, [className, cls[view]])
        }
      >
        <Card
          className={cls.card}
        >
          <div className={cls.imageWrapper}>
            {image}
            <Text text={article.createdAt} className={cls.date} />
          </div>

          <div className={cls.infoWrapper}>
            {types}
            {views}
          </div>

          <Text
            text={article.title}
            className={cls.title}
          />
        </Card>
      </AppLink>
    )
  })
